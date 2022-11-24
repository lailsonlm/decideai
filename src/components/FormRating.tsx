import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { CircleNotch, Star, X } from "phosphor-react";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../lib/firebase";

interface FormRatingProps {
  handleCloseModal: () => void;
  getRatings: () => Promise<void>;
  companyId: string;
}

export function FormRating({ handleCloseModal, companyId, getRatings }: FormRatingProps) {
  const { user } = useContext(AuthContext)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmitRating(e: FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const docRef = await addDoc(collection(db, "ratings"), {
        userId: user?.uid,
        name: user?.displayName,
        avatar: user?.photoURL,
        comment,
        rating,
        createdAt: serverTimestamp(),
        companyId: companyId
      });

      handleCloseModal()
      await getRatings()
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false)
    }
    // sendRating(user && user.displayName, comment, rating, avatar, new Date())    
  }
  
  return (
    <div className="fixed w-full h-full flex flex-col px-4 md:px-0 items-center justify-center bg-blue-800/50 top-0 left-0 z-50">
      <form onSubmit={handleSubmitRating} className="flex flex-col items-center justify-center w-full max-w-2xl mt-8 gap-4 bg-gray-50 px-4 py-8 rounded-lg relative">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-heading text-xl md:text-2xl">Avaliação</h2>
          <p className="text-sm md:text-base">Deixe sua avaliação e comentário e ajude mais pessoas a encontrar as melhores opções!</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {Array(5).fill(0).map((_, index) => (
              rating >= index + 1 ? (
                <div key={index}>
                  <input type="radio" name="option" id={index.toString()} className="hidden" onClick={() => setRating(index + 1)} required />
                  <label
                    htmlFor={index.toString()}
                    className="block cursor-pointer select-none"
                    >
                      <Star size={32} weight="fill" className="text-yellow-400" />
                    </label>
                </div>
              ) :
              (
                <div key={index}>
                  <input type="radio" name="option" id={index.toString()} className="hidden" onClick={() => setRating(index + 1)} required />
                  <label
                    htmlFor={index.toString()}
                    className="block cursor-pointer select-none"
                    >
                      <Star size={32} weight="regular" className="text-yellow-400" />
                    </label>
                </div>
              )
            ))}
          </div>

          <p className="text-xl font-bold">{rating}/5</p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label 
            htmlFor="comment"
            className="text-sm text-gray-500"
          >
            Deixe seu comentário
          </label>
          <textarea 
            id="comment"
            placeholder="Já visitou esse lugar? Conta aqui como foi a experiência!"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-500 p-3 text-sm md:text-base rounded-lg placeholder:text-gray-500 text-blue-800 focus:outline-blue-800 resize-none"
          />
        </div>

        <button 
          type="submit"
          disabled={isLoading || !user?.displayName || !comment || rating === 0}
          className="bg-blue-800 w-full rounded-lg text-gray-50 px-5 py-3 md:px-6 md:py-4 mt-8 font-bold hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {
          isLoading ? 
            <CircleNotch 
              size={24}
              weight="bold" 
              className="animate-spin text-gray-50 mx-auto" 
            /> 
            : 'Avaliar'
          } 
        </button>

        <button 
          className="font-bold text-lg absolute right-4 top-4"
          type="button"
          onClick={handleCloseModal}
        >
          <X size={24} />
        </button>
      </form>
    </div>
  )
}