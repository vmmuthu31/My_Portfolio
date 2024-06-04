import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix.jpeg";
import LMS from "../../Assets/Projects/LMS.jpeg";
import GSOC from "../../Assets/Projects/GSOC.png";
import Drum from "../../Assets/Projects/Drum.png";
import Calc from "../../Assets/Projects/Calc.png";
import Weather from "../../Assets/Projects/Weather.png";
import Eggle from "../../Assets/Projects/E-ggle.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecell from "../../Assets/Projects/Ecell.png";
import Horti from "../../Assets/Projects/Horti.png";
import LCT from "../../Assets/Projects/LCT.png";
import Napft from "../../Assets/Projects/Napft.png";
import payant from "../../Assets/Projects/payant.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/a/AVvXsEjf_wP9C5FGn5fE_1do-Lr92QrSifxUn8PsE8OIr6fLFgCI7DKVyushppZCvnlDr5ejP5WrnEQJOgC3NyEIsE5F_HPdglAxQejVVdtV31nvneBdhVq1PQe0UBy_VGi8U2mXzT7tYqrCK0JgkccWACDqTIEciR6TqGMnl-XL_XX8unW5-vZIAfZYEP4Rdh4"
              isBlog={false}
              title="Starknet HackerHouse"
              description="Starknet Hacker House is a event management website that aims to bring together developers, designers, and entrepreneurs to build innovative projects on the Starknet chain. The website provides information about the event, the schedule, the project, the speakers, and the sponsors.!"
              link="https://www.starknethackerhouse.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWj9xvFqGg8Nc4Ww2YCT-EunomacJTe-ci63HnuYSvweQpThXd5o8t_8PGX50yL9P_V8OaHqHMVFphK_TbVXDcxgO-eAbFFpXk7ONOzkX9fgkEO_glVQPq4G88lcK14NjchJJi80v26ACC-CMFDZEBrkXkeSq74lN00vo_FbtnZHqWi7_WF_OBFHEOP6Q/s320/Screenshot%202024-06-04%20at%2011.24.34%E2%80%AFPM.png"
              isBlog={false}
              title="GigsHub"
              description="GigsHub  is a blockchain-based platform designed to revolutionize the job market by enhancing transparency, security, and efficiency in recruitment processes. It aims to bridge the gap between job seekers and employers, ensuring a seamless, fair, and privacy-focused job search experience.!"
              link="https://gigshub.xyz/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/a/AVvXsEhyOyTjiG8lXCbAd8GOZxradP-dqJ9p9wI5V2j29fI9EI_7KHpcljw0WW6bzJuyPHo-_4rqnNBMF8p_8ldSsKCrELHebtYxp44xgqQZFbX8bXPG9xzOsr3lL4Am4hvmlsARThK5z1n4FKF2_w8czx0OgUuNZoftMvO3JbnIbEwH1W54FfsWwOJGSgBdrS0"
              isBlog={false}
              title="Starkshoot"
              description="Redefining Gaming Excellence on the Starknet Chain.multiplayer real-world onchain gaming experience that pushes the boundaries of excitement and innovation. Powered by the Starknet chain, StarkShoot is not just a game; it's a journey into the future of gaming.!"
              link="https://github.com/vmmuthu31/Starkshoot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/a/AVvXsEiMXGLlgpBBHxQkuTZSjEp9zJT8KzRrJ7s1Ua7M1dDxnk9RagY0HrOkXPNZZjkOkfS0UoG84jqgWcYu7yBTW7wvOWn7ux9JVQDTZmoFysKCzawwDDzLMtu0tXQDIBml9OMpkNfhIAPkz1Evs-siAQkUcwpwVfctlL6i3Geym325ZGiDHhE2IjbV51KiLoI"
              isBlog={false}
              title="PnB MetLife Insurance Dapp"
              description="PnB MetLife Insurance Dapp is a decentralized application that allows users to buy insurance policies using cryptocurrency. The application is built on the Ethereum blockchain and uses smart contracts to automate the insurance process.!"
              link="https://github.com/vmmuthu31/PNB-MetLife"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/_Ezpay/main/public/EzpayLogo.png"
              isBlog={false}
              title="EzPay"
              description="Digitizing Red Envelopes implementing Web3 is our core motto. We created a dApp that can enable users send, receive red envelopes across your favorite chains.!"
              link="https://github.com/vmmuthu31/_Ezpay"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgt_7Bs-WJsbwaXtzDxMWrMBPgIjqjndxi2xH0iUiVmn1eTG1GZuLn4mqhhTbB13-xFxs5eQc9NXxv-IU_OObEKTXIUArjLJHtthqKnUoWbp86QnLsm163OYgW-a5h13VMs94XvoOFrDX-bWq_1a0z-yMBYE_yity1_OCNj43lwe1KUiVNHZImieYfSU_4/s320/WhatsApp%20Image%202024-06-04%20at%2023.05.57.jpeg"
              isBlog={false}
              title="AMS JEC"
              description="AMS JEC is an Attendance Management System for the students of JEC. It is a Mobile application that helps the students to mark their attendance and view their attendance report.!"
              link="https://github.com/vmmuthu31/AMS-JEC-APP"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/a/AVvXsEiye4pV-VTzimqia2ScMbMWR52WxKUx2rvOO2vvV58aASjuPNplkQuVS4ySTYoEiItimIvexKQEg2M5QwCM2k8npKI60RnvLx7G0HyKA9iuCWP4GBGpSgwNEYGvgA9xzm-gBe92L0XtV0R2vcbtWsee_HJ797H9bg1-2piMNRkVtEoPw4DU5k_b-ZnJZSw"
              isBlog={false}
              title="SmartID"
              description="Simplify Web3 transactions with Smart ID. Use your mobile number for secure, hassle-free transfers. Enjoy peace of mind with biometric authentication.!"
              link="https://github.com/vmmuthu31/SmartID"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/a/AVvXsEiYMO71XbKuc6VHPr87FzyRbWb1Ts2egKJ6Pr34b3YEh9Bd9t7Mh3stUJHhad29zCfCVw7rzHFW04NNsgyku8Q5oxlTyme5pO3ISsDYVJ40usID0Q2MXt3arHeoUB65v_bReYQc1CeF7EcYBEcfvW9-0n_Em5oZGes9QyWFgok-eJSsSJlxkDNGEyc-zgQ"
              isBlog={false}
              title="CryptoCoffee"
              description="Earn and Play with Cryptocurrency Deposits in Crypto Coffee. An Web3 Deposit Game Application!"
              link="https://web3-bidding.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/a/AVvXsEjqCAJ-1BwAF5ajGFBqjtJ6ODWJcVqZy1yqpjEyxJFVn0Tvx58WFZm1vHw7D8hbwub3gPgYTlZWx2_2_KVUgaS0CvdCbOZ_BKvTwGKWmbyhhCB68ZfWe737A34uvxTKJrx3zMhssbedUqM0sKsQb-Hisp_MeY0IRNHaCku_vdZRTaHKeJCwjHhb5Lzyogo"
              isBlog={false}
              title="AutoStark"
              description=" AutomateChain: Your On-Chain Automation Tool. Effortlessly Automate Transactions and Governance Votes for Seamless On-Chain Operations.!"
              link="https://auto-stark.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/a/AVvXsEg4y4Pe7o4yznzxRsuJEg6bYIiP4qoWv3ZUHse7rdKglURwH1ZcTnC_O5Qxl7up3IlC5M0im4Xfa7Y47clw-JKJtCgAj5yfA2KdinRotJN_DUx5g8-pHZtg9rN1kOJrDb0RjfzzzZXIJxLWwVxEYmAvXXrikzzQUCs3ZF24w0N9F2CrLD3AEHh6cJjzEtE"
              isBlog={false}
              title="ZkConnect"
              description=" An Social Hiring Platform helps the recruiter and the candidate to make the hiring easy!"
              link="https://zk-connect.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/a/AVvXsEgatAAJknIoSeyl3zHtTrx5l3MNleryW9jfiAy07QxStyUMXmV1m6nQOOZ9-EANOb9vFVkfIheiPppFDI1FzaVPadjByQda90O-q6OHB05RUCbotcbwGq7zSNHM8RWVkKJQ0XQOeeeNSFh69nDySkIW3RFlcEz48SQrW5pHqDk5OgFDI49x1zMkpxkTbdk"
              isBlog={false}
              title="Aramvellum"
              description="An NGO website for the Indian actor, Social Activist and former politician who primarily works in Tamil television.!"
              link="https://aramvellum.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/a/AVvXsEirEDz5TuPE9g1XAfrekKh8luXx5MJUEWRX9zgB7y7iS0tclE6Kz6g2C81mKA-0l4HcDNhQqdTEXEKkn0NR8KnPjyXXvhiBL67MVy0Icf4j6rM40reL3JB9aPzio_CQhywHe4Lilv4ZVXeTMbECzN6bO0CVc9RyrLMCKfEX_SWRPP0GrmGrOErJyut9WVE"
              isBlog={false}
              title="Gryffindors"
              description="It is our company website that we developed for freelancing purposes."
              link="https://gryffindors.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/a/AVvXsEhFjEL4ZQQo9T6w8KLeC1hcpeMLTJuphSHa5MEtu75SLUfUYyP240h_q258A0va1mGb_ahKofzbbUK1eXhV0IuwWAzjxMH48BTvm82xdiP3p5LJTEccFCAM5QA0POazbBNLon8oKBkgv4YmRoBWyTvCQhlcYYiYwI7hCdpAVbWhKYa0eNwxGLaK0jz6zpg"
              isBlog={false}
              title="ZKClaims"
              description="Claim your identity or proof of work that you build on the Hackathon."
              link="https://github.com/vmmuthu31/ZKClaims"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/220404397-184f52a2-616c-46ed-bc12-d6ab77c15725.png"
              isBlog={false}
              title="Agri-Farm"
              description=" Supply Chain Management (SCM) is an essential business process in all spheres of the economy. SCM uses speciﬁc processes to connect from producer to consumer requirement through a chain. !"
              link="https://github.com/vmmuthu31/Agri-Farm"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/212527479-319e977f-3524-456f-af43-9996132f165a.png"
              isBlog={false}
              title="Matic-Name-Service"
              description="The MNS (Matic Name Service) is used to register your dapp in matic the polygon mumbai test network. Implementations for MNS core functionality: The registry, registrars, and public resolvers.!"
              link="https://matic-name-service.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={payant}
              isBlog={false}
              title="Payant"
              description="Get payment on Time using Payant with the smart contracts and the swaps under the hood and focusing on providing value for our users.Payant will make client-contractor relationships trustless.
Transactions are wrapped with legal contracts so you have peace of mind. If you're unhappy with a client's decision, this makes case resolution simple and quick.!"
              link="https://payant-v1.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Napft}
              isBlog={false}
              title="Napft"
              description="Napft is a blockchain-based platform that enables users to Create,buy, sell, and trade digital assets like NFTs. With its innovative technology and user-friendly interface, Napft allows users to access a wide range of digital asset markets, providing a secure and convenient way to store and manage digital assets.!"
              link="https://frontend-zzbw-9hh8bp409-napft.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GSOC}
              isBlog={false}
              title="Generic Decoupled Web Component"
              description="It should be easy to use these web components in decoupled Drupal projects with API data provided by Drupal Core.
              It should also be possible to use these same components within Drupal's traditional Twig based templating engine.!"
              link="https://raw.githubusercontent.com/vmmuthu31"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/206165691-3cd11787-a98c-40f5-ba7d-bd7395ea105b.png"
              isBlog={false}
              title="NFT Media"
              description="NFT media is an web3 social platform that allows only the subcribed person to enter into the platform. Here Subscription meant that Minting of an NFT in the User Wallet.!"
              link="https://github.com/vmmuthu31/NFT_media"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/206828353-3eb98f48-3e99-4ea8-8e1e-d2e31a73cc53.png"
              isBlog={false}
              title="NFT Craft"
              description="Creating own world in a minecraft like environment. The players progress will be stored . Each new block is a NFT owned by the player.!"
              link="https://github.com/vmmuthu31/NFT_Craft"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/200388943-3d18bd81-2ecb-441e-92f7-1cecf81e7ae1.jpg"
              isBlog={false}
              title="Immovables"
              description="Immovables is a Decentralised real estate marketplace where you can purchase and sell lands using your Crypto Wallet and know about the Details of the ledger sheets. It creates an peer-to-peer smart contract between the buyer and seller.!"
              link="https://github.com/Block-Developers/Immovable-web3build"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LCT}
              isBlog={false}
              title="Language Communicator tool"
              description="It is Frontend language communicator tool developed for the AICTE internship!"
              link="https://github.com/vmmuthu31/Language-communicator-tool"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDoUkHHMGXAhMwYOrqgBamD1Zq4mJVuwtjX8kFZ0O81LxzQClR3K9Cj8jqw6hg5zhsrY&usqp=CAU"
              isBlog={false}
              title="Farm Tech"
              description="A tool to help the Tamilnadu farming community to optimize crop production!"
              link="https://github.com/E-ggle/FarmTech-142"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.daikinindia.com/sites/default/files/air-purifier-new.jpg"
              isBlog={false}
              title="QuickChillAC-Services Website"
              description="It is real timee project done over to the client in chennai!"
              link="https://github.com/vmmuthu31/QuickChillAC-Services"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecell}
              isBlog={false}
              title="JEDI-E-Cell"
              description="It is Entrepreneur site developed for our college site.!"
              link="https://github.com/vmmuthu31/JEDI-E-Cell"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/180494873-43f4d449-20c4-461c-8df4-7dbb133e9960.png"
              isBlog={false}
              title="Departmental Website"
              description="It is our college departmental website built in react components.!"
              link="https://jec-site.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Horti}
              isBlog={false}
              title="HortiPedia"
              description="Hortipedia is a question and answer website for professional and developing farmers."
              link="https://github.com/E-ggle/HortiPedia"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/180494873-43f4d449-20c4-461c-8df4-7dbb133e9960.png"
              isBlog={false}
              title="Departmental Website"
              description="It is our college departmental website built in react components.!"
              link="https://jec-site.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/179293522-f79adfc6-2c7d-4a4c-813b-756c7bec0af2.png"
              isBlog={false}
              title="Twitter in Web3"
              description="Nextjs is used for frontend, solidity is for implementation of smart contracts, sanity.i.o is used to manage the text and images."
              link="https://github.com/vmmuthu31/Twitter-using-web3-and-blockchain"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Dynamic Portfolio"
              description="It is Portfolio website where the developers can modify it according to the user needs."
              link="https://vm-portfolio3.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eggle}
              isBlog={false}
              title="E-ggle Educational Website"
              description="This website is where you can get popular courses which can improve your skills at the next level."
              link="https://e-ggle.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/96901635/191006996-0c185cdd-5834-47c6-8927-2e7d539866a7.png"
              isBlog={false}
              title="Project Management System"
              description="It was built in MERN stack by using the GraphQL for the API call. It was an Dynamic Application where the user can Create/Read/Update/Delete the content."
              link="https://github.com/vmmuthu31/Project-Management-System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LMS}
              isBlog={false}
              title="LMS"
              description="LMS Elearn platform, Mainly focused on the Authentication using passport.js and more tools"
              link="https://github.com/vmmuthu31/LMS"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/50716272/67515120-0a3a3b00-f66c-11e9-9517-d6917239ea9d.png"
              isBlog={false}
              title="Task-CrudAPP"
              description="Crud Application used to manage the Task of the User."
              link="https://github.com/vmmuthu31/Task-CrudAPP"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather_API_App-using-Express"
              description="It an Weather Application build using the express get the API from the openweather.org and gives the post request to user."
              link="https://vm-weather.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/practicaldev/image/fetch/s--sB45Op5c--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n09h2m4dd3117acuswuo.png"
              isBlog={false}
              title="Google-Clone-using-React"
              description="Google Clone made by using the Goolge API with the famous JS Library framework React."
              link="https://github.com/vmmuthu31/Google-Clone-using-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.geeksforgeeks.org/wp-content/uploads/20210302135427/20210302135329.gif"
              isBlog={false}
              title="NotesApp-using-Node"
              description="It is a notes application connected to the database which get the notes from the user and display their needs."
              link="https://github.com/vmmuthu31/NotesApp-using-Node"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calc}
              isBlog={false}
              title="Calculator in Reactjs"
              description="A simple Calculator Application built in React js."
              link="https://u2r4k.csb.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/177109813-8d71d61e-6449-45c7-a8a2-081207a96161.png"
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Tic-Tac-Toe Is an X or O gaming app. It was built with Javascript Event Listeners "
              link="https://vm-tictactoe.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drum}
              isBlog={false}
              title="Drum Kit"
              description="Drumkit completely made by using JS and HTML."
              link="https://vmmuthu31.github.io/Drumkit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="NetFlix-Clone"
              description="This project consist of Home page, Sign up page, Browser page in HTML, CSS and JavaScript"
              link="https://github.com/vmmuthu31/netflix-clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
