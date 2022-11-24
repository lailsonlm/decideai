import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import ptBR from "date-fns/locale/pt-BR";
import fromUnixTime from 'date-fns/fromUnixTime'
import { GoogleLogo } from "phosphor-react";
import { collection, getDocs, query, where } from "firebase/firestore"; 

import { FormRating } from "./FormRating";
import { AuthContext } from "../context/AuthContext";
import { db } from "../lib/firebase";

interface Ratings {
  id: string;
  name: string | null;
  avatar: string | null;
  comment: string;
  rating: number;
  createdAt: {
    seconds: number;
  }
  companyId: string;
  userId: string;
}

interface CompanyRatingProps {
  companyId: string;
}

export function CompanyRating({ companyId }: CompanyRatingProps) {
  const { user, handleGoogleSignIn } = useContext(AuthContext)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [ratings, setRatings] = useState<Ratings[]>([])
 
  const averageRating = ratings.reduce((acc, currentValue) => acc + currentValue.rating, 0) / ratings.length

  function handleCloseModal() {
    setIsOpenModal(false)
  }

  async function getRatings() {
    const q = query(collection(db, "ratings"), where("companyId", "==", companyId))
    
    const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      setRatings(data as Ratings[])
  }

  useEffect(() => {
    getRatings()
  }, [])

  return (
    <div className="flex flex-col md:flex-row items-start justify-between divide-y md:divide-y-0 md:divide-x divide-gray-300">
      <div className="flex flex-col justify-center w-full md:max-w-xs pb-6 md:pb-0">
        <h2 className="font-heading text-xl md:text-2xl">Avaliações</h2>
        <div className="md:pl-4 flex flex-col md:items-center mt-4 w-fit">
          <strong className="font-bold text-5xl md:text-8xl">{averageRating ? averageRating.toFixed(1) : 0.0}</strong>
          <p className="text-sm md:text-lg">{ratings.length} avaliações</p>
        </div>
      </div>

      <div className="flex flex-col w-full flex-1 pt-6 md:pt-0 md:pl-8">
        <h2 className="font-heading text-xl md:text-2xl">Comentários</h2> 
          {ratings.length > 0 ? ratings.map((rating, index) => (
            <div 
              key={index}
              className="px-4 py-4 border-b border-gray-300 mb-1"
            >
              <div className="flex items-center gap-2">
                {rating.avatar && 
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden relative">
                    <Image src={rating.avatar} alt="Imagem do usuário" layout="fill" objectFit="cover" objectPosition="center" />
                  </div>
                }
                <div>
                <strong className="text-sm md:text-base">{rating.name}</strong>
                <p className="text-xs text-gray-500">{formatDistanceToNowStrict(fromUnixTime(rating.createdAt.seconds), {addSuffix: true, locale: ptBR})}</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-justify md:text-left mt-2">{rating.comment}</p>
            </div>
          ))
          :
          <p>Não existe comentários para esse estabelecimento, seja o primeiro a comentar!</p>
          }
        
        
        {!user?.displayName ?
          <div className="flex mt-10 flex-col w-full items-center">
            <p className="mb-2 font-semibold">Faça o login e deixe sua avaliação!</p>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-2 bg-blue-800 w-full rounded-lg text-gray-50 px-5 py-3 md:px-6 md:py-4 font-bold hover:bg-blue-500"
            >
              <GoogleLogo size={24} weight="bold" className="text-gray-50" />
              Entrar com Google
            </button>
          </div>
          :
          <button
            type="button"
            onClick={() => setIsOpenModal(true)}
            className="bg-blue-800 w-full rounded-lg text-gray-50 px-5 py-3 md:px-6 md:py-4 mt-10 font-bold hover:bg-blue-500"
          >
            Avaliar
          </button>
        }
      </div>

      { isOpenModal && <FormRating handleCloseModal={handleCloseModal} companyId={companyId} getRatings={getRatings} /> }
           
    </div>
  )
}