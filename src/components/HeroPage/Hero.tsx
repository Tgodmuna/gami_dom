import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";
import { FaGamepad, FaCalendarAlt, FaTag, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { GameDetailsProps, gameData } from "../../Types.ts";
import { Call_API } from "../../helper.ts";
import { gameEndPoint } from "../../API-key.ts";

const Hero: React.FC = () => {
      const [Images, setImages] = useState<
            { image: string; name: string; released: string; slug: string }[] | undefined
      >([{ name: "test", released: "test", slug: "test", image: "test" }]);
      const imgRef = useRef<HTMLImageElement | null>(null);
      const [Index, setIndex] = useState(0);
      const IndicatorREf = useRef<HTMLDivElement>(null);
      const [isDataSet, setisDataSet] = useState(false);
      // const [isLoading, setisLoading] = useState(false)

      const fetchImage = useCallback(async () => {
            setisDataSet(false);
            const response = await Call_API(gameEndPoint());
            if (response) {
                  const results: gameData[] = response.results;
                  const images: { image: string; name: string; released: string; slug: string }[] = results
                        .filter((eachGame: gameData) => eachGame.background_image !== undefined)
                        .map((eachGame: gameData) => ({
                              image: eachGame.background_image,
                              name: eachGame.name,
                              released: eachGame.released,
                              slug: eachGame.slug,
                        }));
                  setisDataSet(true);
                  setImages(images);
            }
      }, []);

      useEffect(() => {
            fetchImage();
      }, [fetchImage]);

      useEffect(() => {
            const Timer = setInterval(() => {
                  Images && setIndex((prv) => (prv + 1) % Images.length);
                  if (Images && Images[Index] && IndicatorREf.current) {
                        Array.from(IndicatorREf.current.children).forEach((eachButton, i) => {
                              if (eachButton instanceof HTMLButtonElement) {
                                    eachButton.classList.remove(styles.active);
                              }
                              if ( imgRef.current )
                              {
                                    imgRef.current.classList.add('translate')
                              }
                        });
                        Array.from(IndicatorREf.current.children)[Index].classList.add(styles.active);
                  }
            }, 5000);

            // remove the translating styles from the image
            if (imgRef.current) {
                  imgRef.current.classList.remove("translate");
            }
            return () => clearInterval(Timer);
      });

      useEffect(() => {
            if (Images?.length)
                  if (Index === Images.length) {
                        setIndex(0);
                  }
      }, [Images?.length, Index]);

      useEffect(() => {
            if (imgRef.current && Images) {
                  imgRef.current.src = isDataSet ? Images[Index].image : "./pexels-.jpg";
            }
      }, [Images, Index, isDataSet]);

      //style the indictor base on the active image
      useEffect(() => {
            const All_buttons = () => {
                  if (IndicatorREf.current)
                        Array.from(IndicatorREf.current!.children).forEach((eachButton, i) => {
                              if (eachButton instanceof HTMLButtonElement) {
                                    eachButton.addEventListener("click", (e: MouseEvent) => {
                                          (e.currentTarget as HTMLButtonElement).classList.add(styles.active);
                                          setIndex((prev): number => {
                                                return prev + (i % Images!.length);
                                          });
                                    });
                              }
                        });
            };
            All_buttons();
      }, [Images]);

      return (
            <div className={`w-full max-w-[100vw] flex flex-col gap-[1rem] items-center justify-center ${styles.hero}`}>
                  <img
                        ref={imgRef}
                        src={`./pexels-.jpg`}
                        alt='Heros'
                        className={`w-full h-[24rem] max-h-[26rem] object-center object-cover `}
                  />

                  <FaAngleRight
                        className={`${styles.angle_Right} angle-right`}
                        onClick={() => setIndex((prev) => (prev + 1) % Images!.length)}
                  />
                  <FaAngleLeft
                        className={`${styles.angle_Left} angle-left`}
                        onClick={() => setIndex((prev) => (prev - 1 + Images!.length) % Images!.length)}
                  />

                  {Images && isDataSet && (
                        <GameDetails
                              name={Images[Index].name}
                              genre={Images[Index].slug}
                              year={Images[Index].released}
                        />
                  )}

                  {isDataSet && <MobileSliderIndicator ref={IndicatorREf} imageLen={Images?.length} />}
            </div>
      );
};

export default Hero;

/**
 * A React functional component that renders a mobile slider indicator.
 * This component is likely used to provide a visual indicator of the current slide
 * in a mobile slider or carousel UI element.
 */
export const MobileSliderIndicator = forwardRef<HTMLDivElement, { imageLen: number | undefined }>(
      ({ imageLen }, ref) => {
            return (
                  <div
                        ref={ref}
                        className={`flex items-center bg-black bg-opacity-35 w-[20rem] h-auto rounded-md  p-2 m-auto justify-around absolute z-40 top-[32rem] md:hidden`}
                  >
                        {Array.from(Array(imageLen)).map((item, i: number) => {
                              return <button key={i} className={"w-2 h-2 p1 rounded-full bg-yellow-600"} />;
                        })}
                  </div>
            );
      }
);

/**
 * Renders a game details component with the provided name, genre, and year.
 * @param name - The name of the game.
 * @param genre - The genre of the game.
 * @param year - The release year of the game.
 * @returns A React component that displays the game details.
 */
export const GameDetails: React.FC<GameDetailsProps> = ({ name, genre, year }: GameDetailsProps) => {
      return (
            <div className='bg-gray-800 w-[80vw]  h-fit bg-opacity-15 text-white rounded-lg p-6 shadow-lg absolute   top-[10rem] flex  flex-col items-start self-center justify-center gap-[2rem] text-xl md:text-3xl font-bold z-30'>
                  <h2 className='text-4xl font-bold mb-4 flex items-center'>
                        <FaGamepad className='mr-2 text-indigo-500 text-[30px] md:text-[60px]' />:{name}
                  </h2>
                  <div className='flex items-center mb-2'>
                        <FaTag className='mr-2 text-indigo-500 text-[30px] md:text-[60px]' />
                        <span className='text-gray-100 font-bold text-3xl'>unknow</span>
                  </div>
                  <div className='flex items-center'>
                        <FaCalendarAlt className='mr-2 text-indigo-500 text-[30px] md:text-[60px]' />:
                        <span className='text-gray-100 font-bold text-3xl'>{year}</span>
                  </div>
            </div>
      );
};
