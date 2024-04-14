/**
 * A React functional component that renders a dropdown menu.
 *
 * @param ClassName - A string representing the CSS class name to apply to the dropdown menu.
 * @param isDroped - A boolean indicating whether the dropdown menu should be displayed or not.
 * @param children - The React elements to be rendered inside the dropdown menu.
 * @returns A React element representing the dropdown menu.
 */
import React, { MutableRefObject, useRef, useState, forwardRef, useEffect, ReactNode } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { DropDownMenuType } from "../../Types.tsx";

/**
 * Renders the header component, which includes a section for choosing language and currency.
 * @returns {JSX.Element} The header component
 */

const Header: React.FC = (): JSX.Element => {
      const [isLangDropdownShowing, setIsLangDropdownShowing] = useState(false);
      const [isCurrencyDropdownShowing, setIsCurrencyDropdownShowing] = useState(false);
      const CurrencyDropdown_Ref: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
      const LangDropdown_Ref: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
      const currencyPara: MutableRefObject<HTMLParagraphElement | null> = useRef<HTMLParagraphElement | null>(null);
      const langPara: MutableRefObject<HTMLParagraphElement | null> = useRef<HTMLParagraphElement | null>(null);

      useEffect(() => {
            const Curr_Ref: HTMLDivElement | null = CurrencyDropdown_Ref.current;
            if (CurrencyDropdown_Ref.current && isCurrencyDropdownShowing) {
                  Array.from(CurrencyDropdown_Ref.current!.children).forEach((eachChild: Element): void => {
                        if (eachChild instanceof HTMLDivElement) {
                              eachChild.addEventListener("click", (e: MouseEvent) => {
                                    if (currencyPara.current) {
                                          let ptag = (e.currentTarget as HTMLDivElement)
                                                .firstElementChild as HTMLParagraphElement;
                                          if (ptag) {
                                                currencyPara.current.innerText = ptag.innerText;
                                          }
                                    }
                              });
                        }
                  });
            }

            return () => {
                  if (Curr_Ref) {
                        Array.from(Curr_Ref!.children).forEach((eachChild: Element) => {
                              if (eachChild instanceof HTMLDivElement) {
                                    eachChild.removeEventListener("click", () => {});
                              }
                        });
                  }
            };
      }, [isCurrencyDropdownShowing]);

      useEffect(() => {
            const Lang_Ref: HTMLDivElement | null = LangDropdown_Ref.current;
            if (LangDropdown_Ref.current && isLangDropdownShowing) {
                  Array.from(LangDropdown_Ref.current!.children).forEach((eachChild: Element) => {
                        if (eachChild instanceof HTMLDivElement) {
                              eachChild.addEventListener("click", (e: MouseEvent) => {
                                    if (langPara.current) {
                                          let ptag = (e.currentTarget as HTMLDivElement)
                                                .firstElementChild as HTMLParagraphElement;
                                          if (ptag) {
                                                langPara.current!.innerText = ptag.innerText;
                                          }
                                    }
                              });
                        }
                  });
            }
            return () => {
                  if (Lang_Ref) {
                        Array.from(Lang_Ref!.children).forEach((eachChild: Element) => {
                              if (eachChild instanceof HTMLParagraphElement) {
                                    eachChild.removeEventListener("click", () => {});
                              }
                        });
                  }
            };
      }, [isLangDropdownShowing]);

      return (
            <div className={`flex flex-col justify-center items-center p-3 bg-black text-neutral-600`}>
                  {/* child_1 */}
                  <div className={`flex items-center gap-2 bg-black w-fit h-fit rounded-md p-2`}>
                        <p
                              ref={langPara}
                              className={`text-neutral-600 text-lg flex justify-center items-center hover:text-yellow-600 capitalize`}
                              onClick={() => {
                                    setIsLangDropdownShowing((prev: boolean): boolean => {
                                          return !prev;
                                    });
                                    setIsCurrencyDropdownShowing(false);
                              }}
                        >
                              choose language <IoMdArrowDropdown className={`text-yellow-600`} />
                        </p>
                        <DropDownMenu
                              ref={LangDropdown_Ref}
                              ClassName={"left-[5rem] top-[3rem] w-[10rem] bg-black "}
                              isDroped={isLangDropdownShowing}
                        >
                              {[
                                    <p key='English'>English</p>,
                                    <p key='portugues'>portugues</p>,
                                    <p key='latin'>latin</p>,
                                    <p key='Spanish'>Spanish</p>,
                                    <p key='French'>French</p>,
                                    <p key='German'>German</p>,
                                    <p key='Italian'>Italian</p>,
                                    <p key='Japanese'>Japanese</p>,
                                    <p key='Chinese'>Chinese</p>,
                                    <p key='Korean'>Korean</p>,
                                    <p key='Arabic'>Arabic</p>,
                                    <p key='Hindi'>Hindi</p>,
                                    <p key='Russian'>Russian</p>,
                                    <p key='Thai'>Thai</p>,
                              ]}
                        </DropDownMenu>

                        <p
                              ref={currencyPara}
                              className={`text-neutral-600 text-lg flex justify-center items-center hover:text-yellow-600 capitalize`}
                              onClick={() => {
                                    setIsCurrencyDropdownShowing((prev: boolean): boolean => {
                                          return !prev;
                                    });
                                    setIsLangDropdownShowing(false);
                              }}
                        >
                              choose currency <IoMdArrowDropdown className={`text-yellow-600`} />
                        </p>
                        <DropDownMenu
                              ref={CurrencyDropdown_Ref}
                              ClassName={"left-[16rem] top-[3rem] w-[10rem] text-wrap bg-black"}
                              isDroped={isCurrencyDropdownShowing}
                        >
                              {[<p>USD</p>, <p>EUR</p>, <p>GBP</p>]}
                        </DropDownMenu>
                  </div>

                  {/* child_2 */}
                  <div className={`flex items-center gap-2 bg-black w-fit h-fit rounded-md p-2`}>
                        <p
                              className={`text-gray-400 text-base flex justify-center items-center hover:text-yellow-600 capitalize`}
                        >
                              call <span>+1234567890</span>{" "}
                        </p>
                  </div>
            </div>
      );
};

export default Header;

/**
 * A React functional component that renders a dropdown menu.
 *
 * @param ClassName - A string representing the CSS class name to apply to the dropdown menu.
 * @param isDroped - A boolean indicating whether the dropdown menu should be displayed or not.
 * @param children - The React elements to be rendered inside the dropdown menu.
 * @returns A React element representing the dropdown menu.
 */
export const DropDownMenu = forwardRef<HTMLDivElement, DropDownMenuType>(({ ClassName, isDroped, children }, ref) => {
      return (
            <div
                  ref={ref}
                  className={`flex flex-col z-50 items-center overflow-x-hidden overflow-scroll justify-center h-0 p-0 ${
                        isDroped
                              ? "h-[20vh] border border-yellow-500 p-2 transform transition-all duration-1000  "
                              : "h-0 p-0 transition-all opacity-5 duration-700 "
                  } absolute ${ClassName}`}
            >
                  {React.Children.map(children, (child: ReactNode, index: number): ReactNode => {
                        return (
                              <div
                                    key={index}
                                    className={`flex flex-col items-center justify-center hover:text-yellow-600 capitalize text-lg`}
                              >
                                    {child}
                              </div>
                        );
                  })}
            </div>
      );
});

// export const DropDownMenu = forwardRef<HTMLDivElement, DropDownMenuType>(({ ClassName, isDroped, children }, ref) => {
//       return (
//             <div
//                   ref={ref}
//                   className={`flex flex-col z-50 items-center overflow-x-hidden overflow-scroll justify-center h-0 p-0 ${
//                         isDroped
//                               ? "h-[20vh] border border-yellow-500 p-2 transform transition-all duration-1000  "
//                               : "h-0 p-0 transition-all opacity-5 duration-700 "
//                   } absolute ${ClassName}`}
//             >
//                   {children}
//             </div>
//       );
// });
