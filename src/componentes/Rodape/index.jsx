import React from 'react';
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return(
    <footer className={styles.rodape}>
	  <div className={styles.rodape__icones}>
	    <a
		  href="https://www.facebook.com/AluraCursosOnline/"
		  target="_blank"
		  rel="noreferrer"
		>
		  <img src={facebook} alt="íncone do facebook" />
		</a>
		<a
		  href="https://www.twitter.com/aluraonline/?lang=en"
		  target="_blank"
		  rel="noreferrer"
		>
		  <img src={twitter} alt="íncone do twitter" />
		</a>
		<a
		  href="https://www.instagram.com/aluraonline/?h1=en"
		  target="_blank"
		  rel="noreferrer"
		>
		  <img src={instagram} alt="íncone do instagram" />
		</a>
	  </div>
	  <p>Desenvolvido por Alura</p>
	</footer>
  );
}