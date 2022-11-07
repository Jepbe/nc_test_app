import styles from './mainContent.module.css';

export default function mainContent() {
    return (
        <div className={styles.mainDiv}>
            <div>
                <img src="./nordic_code.png" alt="Nordic Code Logo" className='h-[80px] w-[80px] rounded-xl' />
                <h1 className='text-3xl font-bold'>Cloud Console</h1>
                <h5 className='mt-2 text-sm font-normal'>By Nordic Code</h5>
                
                <p className='mt-8 text-[17px] m-10'>Some text here ! Its gonna be awsome</p>
                <button className={styles.mainButton}>Get Started</button>
            </div>

            <div>
                <h1>Controling Your Blog</h1>
                <h4>Use The Nordic Code Clode Console for managing your blog!</h4>
            </div>
            
            <div>3</div>
            <div>4</div>
            <div>4</div>
            <div>4</div>
        </div>    
    );
}