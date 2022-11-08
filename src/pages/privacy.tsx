import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SEO } from "../components/Seo";

export default function Privacy() {
  const router = useRouter()
  const path = router.asPath
  return (
    <>
    <SEO 
      title={`Decide Aí - Política de Privacidade`}
      path={path}
    />
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full h-[175px] sm:h-[320px] bg-blue-800 relative">
        <Header />
        <div className="flex items-center gap-1 md:gap-4 max-w-[1120px] w-full mx-auto h-full px-6 sm:px-4 xl:px-0 text-yellow-400">
        <h2 className="font-heading text-2xl md:text-5xl text-white">Política de Privacidade</h2>
        </div>

      </div>

      <main className="flex flex-col justify-start max-w-[1120px] w-full mx-auto h-full mt-6 gap-8 overflow-hidden px-6 sm:px-4 xl:px-0">     
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-xl md:text-5xl mt-2">Privacy Policy</h2>
          <p className="text-sm md:text-base text-justify">
          Lailson Sobral built the Decide Aí app as a Free app. This SERVICE is provided by Lailson Sobral at no cost and is intended for use as is.
          This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
          If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
          The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Decide Aí unless otherwise defined in this Privacy Policy.
          </p>

          <p className="text-sm md:text-base text-justify">
          <strong className="block">Information Collection and Use</strong>
          For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to IP address, identifiers devices. The information that I request will be retained on your device and is not collected by me in any way.
          The app does use third-party services that may collect information used to identify you.
          Link to the privacy policy of third-party service providers used by the app:{' '}
          <Link href='https://expo.io/privacy' passHref >
            <a target="_blank" className="font-bold">
            Expo
            </a>
          </Link>
          .
          </p>

          <p className="text-sm md:text-base text-justify">
          <strong className="block">Log Data</strong>
          I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
          </p>

          <p className="text-sm md:text-base text-justify">
          <strong className="block">Cookies</strong>
          Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device&apos;s internal memory.
          This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
          </p>

          <p className="text-sm md:text-base text-justify">
          <strong className="block">Service Providers</strong>
          I may employ third-party companies and individuals due to the following reasons:
          </p>
          <ul className="list-disc ml-8">
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p className="text-sm md:text-base text-justify">        
          I want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
          </p>
          
          <p className="text-sm md:text-base text-justify">
          <strong className="block">Security</strong>
          I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
          </p>
          
          <p className="text-sm md:text-base text-justify">
          <strong className="block">Links to Other Sites</strong>
          This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
          
          <p className="text-sm md:text-base text-justify">
          <strong className="block">Children&apos;s Privacy</strong>
          These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do the necessary actions.
          </p>
          
          <p className="text-sm md:text-base text-justify">
          <strong className="block">Changes to This Privacy Policy</strong>
          I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
          This policy is effective as of 2022-11-08.
          </p>
          
          <p className="text-sm md:text-base text-justify">
          <strong className="block">Contact Us</strong>
          If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at suporte@decideai.com.br.
          This privacy policy page was created at {' '}
          <Link href='https://privacypolicytemplate.net/' passHref >
            <a target="_blank" className="font-bold">
            privacypolicytemplate.net
            </a>
          </Link>
          {' '} and modified/generated by {' '}
          <Link href='https://app-privacy-policy-generator.nisrulz.com/' passHref >
            <a target="_blank" className="font-bold">
            App Privacy Policy Generator
            </a>
          </Link>
          .
          </p>
        </div>


        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-xl md:text-5xl mt-2">Política de Privacidade</h2>
          <p className="text-sm md:text-base text-justify">
          Lailson Sobral construiu o aplicativo Decidir Aí como um aplicativo gratuito. Este SERVIÇO é fornecido por Lailson Sobral sem custo e destina-se ao uso como está.
          Esta página é usada para informar os visitantes sobre minhas políticas de coleta, uso e divulgação de Informações Pessoais se alguém decidir usar meu Serviço.
          Se você optar por usar meu Serviço, concorda com a coleta e uso de informações em relação a esta política. As Informações Pessoais que eu coleto são usadas para fornecer e melhorar o Serviço. Não usarei ou compartilharei suas informações com ninguém, exceto conforme descrito nesta Política de Privacidade.
          Os termos utilizados nesta Política de Privacidade têm os mesmos significados dos nossos Termos e Condições, que podem ser acessados no Decide Aí, salvo definição em contrário nesta Política de Privacidade.
          </p>

          <p className="text-sm md:text-base text-justify">
          <strong className="block">Coleta e uso de informações</strong>
            Para uma melhor experiência, ao usar nosso Serviço, posso exigir que você nos forneça certas informações de identificação pessoal, incluindo, entre outras, endereço IP, dispositivos identificadores. As informações que eu solicitar serão retidas no seu dispositivo e não serão coletadas por mim de forma alguma.
            O aplicativo usa serviços de terceiros que podem coletar informações usadas para identificá-lo.
            Link para a política de privacidade de provedores de serviços terceirizados usados pelo aplicativo:{' '}
          <Link href='https://expo.io/privacy' passHref >
            <a target="_blank" className="font-bold">
            Expo
            </a>
          </Link>
          .
          </p>

          <p className="text-sm md:text-base text-justify">
          <strong className="block">Dados de registro</strong>
          Quero informar que sempre que você usar meu Serviço, em caso de erro no aplicativo, coleto dados e informações (através de produtos de terceiros) em seu telefone chamado Log Data. Esses Dados de Registro podem incluir informações como o endereço do Protocolo de Internet (“IP”) do seu dispositivo, nome do dispositivo, versão do sistema operacional, a configuração do aplicativo ao utilizar meu Serviço, a hora e a data de seu uso do Serviço e outras estatísticas.
          </p>

          <p className="text-sm md:text-base text-justify">
          <strong className="block">Cookies</strong>
            Cookies são arquivos com uma pequena quantidade de dados que são comumente usados como identificadores exclusivos anônimos. Eles são enviados para o seu navegador a partir dos sites que você visita e são armazenados na memória interna do seu dispositivo.
            Este Serviço não usa esses “cookies” explicitamente. No entanto, o aplicativo pode usar código de terceiros e bibliotecas que usam “cookies” para coletar informações e melhorar seus serviços. Você tem a opção de aceitar ou recusar esses cookies e saber quando um cookie está sendo enviado ao seu dispositivo. Se você optar por recusar nossos cookies, talvez não consiga usar algumas partes deste Serviço.
          </p>

          <p className="text-sm md:text-base text-justify">
          <strong className="block">Provedores de serviço</strong>
          Posso empregar empresas e indivíduos terceirizados pelos seguintes motivos:
          </p>
          <ul className="list-disc ml-8">
            <li>Para facilitar nosso Serviço;</li>
            <li>Para fornecer o Serviço em nosso nome;</li>
            <li>Executar serviços relacionados ao Serviço; ou</li>
            <li>Para nos ajudar a analisar como nosso Serviço é usado.</li>
          </ul>
          <p className="text-sm md:text-base text-justify">        
          Quero informar aos usuários deste Serviço que esses terceiros têm acesso às suas Informações Pessoais. O motivo é realizar as tarefas atribuídas a eles em nosso nome. No entanto, eles são obrigados a não divulgar ou usar as informações para qualquer outra finalidade.
          </p>
          
          <p className="text-sm md:text-base text-justify">
          <strong className="block">Segurança</strong>
          Eu valorizo sua confiança em nos fornecer suas informações pessoais, portanto, estamos nos esforçando para usar meios comercialmente aceitáveis de protegê-las. Mas lembre-se que nenhum método de transmissão pela internet, ou método de armazenamento eletrônico é 100% seguro e confiável, e não posso garantir sua segurança absoluta.
          </p>
          
          <p className="text-sm md:text-base text-justify">
          <strong className="block">Links para outros sites</strong>
          Este Serviço pode conter links para outros sites. Se você clicar em um link de terceiros, será direcionado para esse site. Observe que esses sites externos não são operados por mim. Portanto, aconselho vivamente a rever a Política de Privacidade desses sites. Não tenho controle e não assumo responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites ou serviços de terceiros.
          </p>
          
          <p className="text-sm md:text-base text-justify">
          <strong className="block">Privacidade das crianças</strong>
          Esses Serviços não se dirigem a menores de 13 anos. Não coleto intencionalmente informações de identificação pessoal de crianças menores de 13 anos. No caso de eu descobrir que uma criança menor de 13 anos me forneceu informações pessoais, eu imediatamente as excluo de nossos servidores. Se você é pai ou responsável e está ciente de que seu filho nos forneceu informações pessoais, entre em contato comigo para que eu possa tomar as medidas necessárias.
          </p>
          
          <p className="text-sm md:text-base text-justify">
          <strong className="block">Alterações nesta Política de Privacidade</strong>
          Posso atualizar nossa Política de Privacidade de tempos em tempos. Assim, recomendamos que você revise esta página periodicamente para quaisquer alterações. Vou notificá-lo sobre quaisquer alterações publicando a nova Política de Privacidade nesta página.
          Esta política está em vigor a partir de 08/11/2022.
          </p>
          
          <p className="text-sm md:text-base text-justify">
          <strong className="block">Contate-nos</strong>
          Se você tiver alguma dúvida ou sugestão sobre minha Política de Privacidade, não hesite em me contatar em suporte@decideai.com.br.
          Esta página de política de privacidade foi criada em  {' '}
          <Link href='https://privacypolicytemplate.net/' passHref >
            <a target="_blank" className="font-bold">
            privacypolicytemplate.net
            </a>
          </Link>
          {' '}  e modificada/gerada pelo {' '}
          <Link href='https://app-privacy-policy-generator.nisrulz.com/' passHref >
            <a target="_blank" className="font-bold">
            App Privacy Policy Generator
            </a>
          </Link>
          .
          </p>
        </div>
      </main>
      <Footer />
    </div>
    </>
  )
}