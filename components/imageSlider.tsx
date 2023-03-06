/* eslint-disable @next/next/no-img-element */
import styles from '../styles/components/ImageSlider.module.css'
import { classNames } from '../utils/classNames'

interface ImageSliderProps{
    pictures: string[],
    iterations: number,
    direction: string,
    className: string
}

function ImageSlider({ pictures, iterations, direction, className }: ImageSliderProps) {

    function replicateArray(arr:string[], n:number) {
        var arrays = Array.apply(null, new Array(n));
        arrays = arrays.map(function () { return arr; });
        return [].concat.apply([], arrays as any)
    }

    const imgArray = replicateArray(pictures, iterations);

    return (
        <div className={ classNames(styles.container, className)} >
            <div className={styles.slider} style={{ animationDirection: `${direction}` }}>
                {imgArray.map((img, idx) => (
                    <div className={styles.slide} key={idx}>
                        <img src={img} alt="slide" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider