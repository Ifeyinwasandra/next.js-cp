import Link from "next/link";
// import styles from "../styles/Style.module.css";

export default function contact() {
  return (
    <div>
      <p>
        View my Project now <Link className="text-blue-400" href="/home">home</Link>
      </p>
      <p>© 2024 by ORY. Powered and secured by ory</p>
 </div>
);
}