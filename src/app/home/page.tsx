import React from "react";
import Image from "next/image";
// import styles from "../styles/Style.module.css";


const Home = () => {
  return (
    <div>
      <h1>Here are the Samples of our Building Construction</h1>
      <div>
      <Image src="/Images/PIX 1.jpg" alt="" width={200} height={200}/>
      <Image src="/Images/PIX 2.jpg" alt="" width={200} height={300}/>
      <Image src="/Images/PIX 3.jpg" alt="" width={200} height={300}/>
      <Image src="/Images/PIX 4.jpg" alt="" width={200} height={300}/>
      </div>
      <div>
      <Image src="/Images/PIX 5.jpg" alt="" width={300} height={200}/>
      <Image src="/Images/PIX 6.jpg" alt="" width={300} height={200}/>
      <Image src="/Images/PIX 7.jpg" alt="" width={300} height={200}/>
      </div>
    </div>
);
}

export default Home;
