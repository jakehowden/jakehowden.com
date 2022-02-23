import { FunctionComponent } from 'react'
import styles from '../styles/Jake.module.css'

const Jake: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.typedOut}>
        <p>
        <span className={styles.keyword}>var</span> <span className={styles.variable}>dev</span> = <span className={styles.keyword}>new </span><span className={styles.class}>dotnetDeveloper</span>()<br/>
        {`{`}<br/>
        <span className={styles.variable}>&emsp;&emsp;{`name`}</span> = <span className={styles.string}>{`"Jake Howden"`}</span>,<br/>
        <span className={styles.variable}>&emsp;&emsp;{`type`}</span> = <span className={styles.string}>{`"Backend Developer"`}</span>,<br/>
        <span className={styles.variable}>&emsp;&emsp;{`location`}</span> = <span className={styles.string}>{`"South Wales, UK"`}</span>,<br/>
        <span className={styles.variable}>&emsp;&emsp;{`stack`}</span> = <span className={styles.keyword}>{`new`}</span> <span className={styles.class}>{`List`}</span>{`<`}<span className={styles.keyword}>{`string`}</span>{`>`}()<br/>
        &emsp;&emsp;{`{`}<br/>
        <span className={styles.string}>&emsp;&emsp;&emsp;&emsp;{`"C#"`}</span>,<br/>
        <span className={styles.string}>&emsp;&emsp;&emsp;&emsp;{`".NET"`}</span>,<br/>
        <span className={styles.string}>&emsp;&emsp;&emsp;&emsp;{`"SQL"`}</span>,<br/>
        <span className={styles.string}>&emsp;&emsp;&emsp;&emsp;{`"NoSQL"`}</span>,<br/>
        &emsp;&emsp;{`}`}<br/>
        {`}`}
      </p>
      </div>
    </div>
  )
}

export default Jake