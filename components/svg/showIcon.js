
const ShowIcon = ({ icon, stroke }) => {
  const showComponent = (icon) => {
    if (icon == 'Register') {
      return (
        <g >
<path strokeLinecap="round" strokeLinejoin="round" d="M15.061 5.57842C15.061 8.35184 12.8127 10.6001 10.0393 10.6001C7.2659 10.6001 5.0176 8.35184 5.0176 5.57842C5.0176 2.805 7.2659 0.556702 10.0393 0.556702C12.8127 0.556702 15.061 2.805 15.061 5.57842Z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M4.73449 10.6078C6.06607 12.0118 7.95052 12.8886 10.0393 12.8886C12.1282 12.8886 14.0124 12.0118 15.344 10.6078C16.7486 11.831 17.8935 13.5326 18.6281 15.543H17.0499C14.9157 15.543 13.1857 17.2732 13.1857 19.4073V21.5375C12.1807 21.6311 11.094 21.6896 9.9473 21.6896C7.08992 21.6896 4.65174 21.3267 2.92954 20.9641C2.0688 20.7829 1.38796 20.602 0.924269 20.4671C0.781145 20.4255 0.658747 20.3883 0.558172 20.3568C0.650311 16.2754 2.30203 12.7259 4.73449 10.6078Z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M18.5284 21.1521H18.0284V21.6521V23.1714C18.0284 23.3842 17.8559 23.5567 17.6431 23.5567C17.4303 23.5567 17.2578 23.3842 17.2578 23.1714V21.6521V21.1521H16.7578H15.2284C15.0156 21.1521 14.8431 20.9796 14.8431 20.7668C14.8431 20.554 15.0156 20.3815 15.2284 20.3815H16.7578H17.2578V19.8815V18.3021C17.2578 18.0894 17.4303 17.9168 17.6431 17.9168C17.8559 17.9168 18.0284 18.0894 18.0284 18.3021V19.8815V20.3815H18.5284H20.0976C20.3104 20.3815 20.4829 20.554 20.4829 20.7668C20.4829 20.9796 20.3104 21.1521 20.0976 21.1521H18.5284Z" />

        </g>
      );
    } else if (icon == 'Home') {
      return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        
      );
    }else if (icon == 'DefaultUser') {
      return (
         <g  transform=" scale(0.72,0.72)">
         <path strokeLinecap="round" strokeLinejoin="round"  d="M25.8283 9.73388C25.8283 13.7161 22.5056 16.9678 18.3776 16.9678C14.2496 16.9678 10.9269 13.7161 10.9269 9.73388C10.9269 5.75166 14.2496 2.5 18.3776 2.5C22.5056 2.5 25.8283 5.75166 25.8283 9.73388Z"/>
         <path strokeLinecap="round" strokeLinejoin="round"  d="M5.18798 30.7789C4.90126 30.6977 4.67154 30.6283 4.50298 30.5756C4.60052 24.6638 7.08078 19.5098 10.7571 16.492C12.643 18.5085 15.3605 19.7725 18.3776 19.7725C21.3904 19.7725 24.104 18.5122 25.9896 16.501C27.1244 17.5291 28.43 19.4315 29.4908 21.8464C30.6142 24.4039 31.4366 27.4773 31.4965 30.5764C31.3548 30.6206 31.1689 30.6767 30.94 30.7416C30.3425 30.911 29.4522 31.1409 28.2902 31.3795C25.9676 31.8564 22.5602 32.3679 18.2375 32.5001C14.1071 32.4995 10.5828 31.9891 8.09231 31.4791C6.84665 31.224 5.86064 30.9692 5.18798 30.7789Z"/>
         </g>
      );
    }else if (icon == 'Login') {
      return (
         <g transform=" scale(0.72,0.72)">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.91666 17.4777C2.91666 17.9018 3.29479 18.2456 3.76131 18.2456H19.8488L16.7109 21.0938C16.3819 21.3929 16.3819 21.8795 16.7109 22.1786C16.8729 22.3259 17.089 22.4018 17.3051 22.4018C17.5212 22.4018 17.7372 22.3259 17.8993 22.1786L22.4712 18.0224C22.8002 17.7233 22.8002 17.2366 22.4712 16.9375L17.8993 12.7813C17.5703 12.4822 17.035 12.4822 16.706 12.7813C16.377 13.0804 16.377 13.567 16.706 13.8661L19.839 16.7143H3.76131C3.29479 16.7143 2.91666 17.0536 2.91666 17.4777Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M26.543 30.625C29.9097 30.625 32.6411 28.1365 32.6411 25.0758V9.76162C32.6411 6.70095 29.9038 4.21246 26.543 4.21246H9.69738C6.33064 4.21246 3.59924 6.70095 3.59924 9.76162V12.9087C3.59924 13.4215 4.05646 13.8317 4.61461 13.8317C5.1787 13.8317 5.63591 13.4161 5.63591 12.9087V9.76162C5.63591 7.72657 7.45882 6.06398 9.69738 6.06398H26.543C28.7815 6.06398 30.6044 7.72117 30.6044 9.76162V25.0758C30.6044 27.1108 28.7815 28.7734 26.543 28.7734H9.69738C7.45882 28.7734 5.63591 27.1162 5.63591 25.0758V21.9665C5.63591 21.4537 5.1787 21.0381 4.61461 21.0381C4.05052 21.0381 3.59924 21.4537 3.59924 21.9665V25.0758C3.59924 28.1365 6.33658 30.625 9.69738 30.625H26.543Z"/>
         </g>
      );
    }else if (icon == 'Logout') {
      return (
         <g transform=" scale(0.72,0.72)">
           <path strokeLinecap="round" strokeLinejoin="round" d="M27.8013 16.9208C27.8013 17.3449 27.4231 17.6886 26.9566 17.6886H10.8691L14.007 20.5368C14.3361 20.836 14.3361 21.3226 14.007 21.6217C13.845 21.769 13.6289 21.8449 13.4128 21.8449C13.1968 21.8449 12.9807 21.769 12.8186 21.6217L8.24676 17.4654C7.91774 17.1663 7.91774 16.6797 8.24676 16.3806L12.8186 12.2243C13.1477 11.9252 13.6829 11.9252 14.012 12.2243C14.341 12.5234 14.341 13.01 14.012 13.3092L10.8789 16.1574H26.9566C27.4231 16.1574 27.8013 16.4967 27.8013 16.9208Z"/>
           <path strokeLinecap="round" strokeLinejoin="round" d="M26.543 30.625C29.9097 30.625 32.6411 28.1365 32.6411 25.0758V9.76162C32.6411 6.70095 29.9038 4.21246 26.543 4.21246H9.69739C6.33065 4.21246 3.59925 6.70095 3.59925 9.76162V12.9087C3.59925 13.4215 4.05646 13.8317 4.61462 13.8317C5.17871 13.8317 5.63592 13.4161 5.63592 12.9087V9.76162C5.63592 7.72657 7.45883 6.06398 9.69739 6.06398H26.543C28.7815 6.06398 30.6044 7.72117 30.6044 9.76162V25.0758C30.6044 27.1108 28.7815 28.7734 26.543 28.7734H9.69739C7.45883 28.7734 5.63592 27.1162 5.63592 25.0758V21.9665C5.63592 21.4537 5.17871 21.0381 4.61462 21.0381C4.05052 21.0381 3.59925 21.4537 3.59925 21.9665V25.0758C3.59925 28.1365 6.33658 30.625 9.69739 30.625H26.543Z"/>
         </g>
      );
    }  else if (icon == 'DarkTheme') {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>        
      );
    } else if (icon == 'LightTheme') {
      return (
        <path strokeLinecap="round" strokeLinejoin="round"  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        fillRule="evenodd"
        clipRule="evenodd"
      />        
      );
    }   else if (icon == 'Plus') {
      return (
        <path transform=" scale(0.35,0.35)" strokeWidth={5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M26.5507 4.46838L26.5536 26.5544L4.46735 26.5574C2.56417 26.5576 1.02154 28.1007 1.02179 30.0039C1.02204 31.9071 2.56508 33.4497 4.46826 33.4494L26.5545 33.4464L26.5574 55.5327C26.5577 57.4358 28.1007 58.9785 30.0039 58.9782C31.9071 58.9779 33.4497 57.4349 33.4494 55.5317L33.4465 33.4455L55.5325 33.4425C57.4357 33.4423 58.9784 31.8992 58.9781 29.996C58.9778 28.0929 57.4348 26.5502 55.5316 26.5505L33.4456 26.5535L33.4427 4.46745C33.4424 2.56427 31.8994 1.02164 29.9962 1.0219C28.093 1.02215 26.5504 2.5652 26.5507 4.46838Z"/>
    
      );
    }  else if (icon == 'Close') {
      return (
        <g transform=" scale(0.72,0.72)">
        <path  strokeLinecap="round" strokeLinejoin="round" d="M1.06069 1.06066C1.64647 0.474877 2.59622 0.474877 3.18201 1.06066L21.5668 19.4454C22.1526 20.0312 22.1526 20.981 21.5668 21.5668C20.981 22.1525 20.0312 22.1525 19.4455 21.5668L1.06069 3.18198C0.474901 2.5962 0.474901 1.64645 1.06069 1.06066Z"/>
        <path  strokeLinecap="round" strokeLinejoin="round" d="M1.06062 21.5668C0.47483 20.981 0.47483 20.0312 1.06062 19.4454L19.4454 1.06066C20.0312 0.474876 20.9809 0.474876 21.5667 1.06066C22.1525 1.64645 22.1525 2.5962 21.5667 3.18198L3.18194 21.5668C2.59615 22.1525 1.6464 22.1525 1.06062 21.5668Z" />
        </g>
      );
    }  else if (icon == 'Users') {
      return (
        <g fill="currentColor" fillRule="evenodd"transform=" scale(0.32,0.32)">
        <path  strokeLinecap="round" strokeLinejoin="round" d="M51.81 35.962h-6.4c-.915 0-1.524-.61-1.524-1.524s.61-1.524 1.524-1.524h6.4c1.523 0 3.047-.304 4.571-.61.914-.304 1.524-.609 2.133-.914.61-.304.915-1.219.915-1.828 0-.61-.305-1.22-.61-1.829-1.524-1.828-4.267-3.047-7.924-4.266-.305 0-.305-.305-.61-.305-.914-.61-1.523-1.524-1.828-2.438 0-1.22.61-2.134 1.524-2.743 2.133-3.048 3.352-5.79 3.048-8.229-.305-1.523-.915-2.742-2.134-3.657-2.133-1.524-5.18-1.524-7.01 0-1.218.915-1.828 2.134-2.133 3.657-.304 2.438.915 5.181 3.048 8.229.61.61.305 1.524-.305 2.133-.61.61-1.524.305-2.133-.304-3.048-3.658-4.267-7.315-3.657-10.667.305-2.133 1.524-4.267 3.352-5.486 3.048-2.438 7.62-2.438 10.667 0 1.828 1.524 3.047 3.353 3.352 5.486.305 3.352-.914 7.01-3.657 10.667-.305.304-.305.609-.61.609 0 0 .305 0 .305.305 3.962 1.219 7.01 3.047 8.838 5.18.915.915 1.524 2.439 1.524 3.963a5.332 5.332 0 01-2.133 4.266c-.914.61-1.829 1.22-3.048 1.524-1.828 0-3.657.305-5.485.305zM18.59 35.962h-6.4c-2.133 0-3.961-.305-5.485-.914-1.22-.305-2.134-.915-3.048-1.524-1.219-.914-2.133-2.743-2.133-4.267 0-1.524.61-2.743 1.524-3.962 2.133-2.133 5.18-3.657 9.142-4.876 0 0 .305 0 .305-.305 0 0-.305-.304-.305-.61C9.143 15.849 7.62 11.887 8.23 8.839c.304-2.133 1.523-4.267 3.352-5.486 3.048-2.438 7.619-2.438 10.667 0 1.828 1.524 3.047 3.353 3.352 5.486.305 3.352-.914 7.01-3.657 10.667-.61.61-1.524.61-2.133.305-.61-.61-.915-1.524-.305-2.134 2.438-3.047 3.352-6.095 3.047-8.228 0-1.524-.914-2.743-2.133-3.658-2.133-1.523-4.876-1.523-7.01 0-1.219.915-2.133 2.134-2.133 3.353-.305 2.438.914 5.18 3.048 8.228.61.915 1.524 1.829 1.219 2.743 0 1.22-.914 1.829-1.829 2.438 0 0-.304.305-.61.305-3.352 1.524-5.79 2.743-7.618 4.572-.305.61-.61 1.219-.61 1.828 0 .914.305 1.524.914 1.829.61.304 1.22.61 2.134.914 1.219.61 2.743.914 4.266.914h6.4c.915 0 1.524.61 1.524 1.524s-.61 1.524-1.524 1.524z"/>
        <path  strokeLinecap="round" strokeLinejoin="round" d="M38.4 62.476H25.905c-2.743 0-5.181-.305-7.315-1.219-1.523-.61-2.742-1.219-3.657-2.133-1.828-.914-2.743-3.048-2.743-5.181 0-1.829.61-3.353 1.829-4.876 2.438-2.743 6.4-4.877 11.886-6.705l.914-.914-.914-.915c-3.962-5.18-5.79-9.752-5.181-14.019.61-2.743 1.828-5.18 4.266-7.01 3.962-2.742 10.058-2.742 13.715 0 2.438 1.83 3.962 4.267 4.266 7.01.61 4.267-1.219 9.143-4.876 14.02-.914.914-.914 1.218-.914 1.218s.61.305.914.61c5.486 1.828 9.448 3.962 11.886 6.705 1.219 1.219 1.829 3.047 1.829 4.876 0 2.133-.915 4.267-2.439 5.486-.914.914-2.133 1.523-3.657 2.133-2.438.61-4.876.914-7.314.914zM32 20.114c-1.829 0-3.657.61-5.181 1.524-1.829 1.22-2.743 3.048-3.048 5.181-.304 3.352 1.22 7.314 4.267 11.581.914.914 1.829 1.829 1.524 3.352 0 1.22-1.22 2.134-2.133 3.048 0 0-.305.305-.61.305-5.18 1.524-8.533 3.657-10.971 6.095-.305.61-.61 1.829-.61 2.743 0 1.219.61 2.438 1.524 3.047.61.61 1.828 1.22 3.048 1.524 1.828.61 3.961.915 6.095.915H38.4c2.133 0 4.267-.305 6.095-.915 1.22-.304 2.134-.914 3.048-1.524.914-.609 1.524-1.828 1.524-3.047 0-.914-.305-2.133-1.22-2.743-2.133-2.438-5.79-4.267-10.97-6.095-.306 0-.306-.305-.61-.305-.915-.914-2.134-1.829-2.134-3.048s.915-2.438 1.829-3.352c3.048-3.962 4.571-8.229 4.267-11.581-.305-2.133-1.22-3.657-3.048-5.18-1.524-.915-3.352-1.525-5.181-1.525z"/>
        </g>
      );
    }  else {
      return;
    }

  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" strokeWidth={stroke}
    >
      {showComponent(icon)}
    </svg>
  );
};

export default ShowIcon;
