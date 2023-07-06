const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading1: "font-sans text-[48px] font-semibold leading-[56px] tracking-tight text-center",
    heading2: "font-sans text-[40px] font-semibold leading-[48px] tracking-tight text-left",
    paragraph: "font-sans text-[20px] font-normal leading-[24px] tracking-tight text-center",
    portrait: "w-[160px] h-[160px] top-[139px] left-[432px]",

  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;