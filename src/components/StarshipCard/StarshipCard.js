import styles from './StarshipCard.module.css';



function StarshipCard({ starship }){ 
    console.log(starship);
    return (
    <div className={styles.StarshipCard}>
        <p>{starship.name}</p>
        </div>

    );
        }



export default StarshipCard;