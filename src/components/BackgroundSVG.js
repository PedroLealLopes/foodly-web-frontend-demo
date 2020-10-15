import React from 'react'
import phonesImg from '../images/image-mockups.png'

const Backgroundsvg = ({isDesktop, style}) => {
  console.log(style);
  const desktopBackground = () =>{
    return(<div style={style}>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1271"
    height="1034"
    style={{ position: 'absolute', top: '-100' }}
  >
    <defs>
      <linearGradient id="c" x1="0%" x2="99.58%" y1="36.147%" y2="63.736%">
        <stop offset="0%" stopColor="#9D4EDD"></stop>
      </linearGradient>
      <filter
        id="a"
        width="104.9%"
        height="135.9%"
        x="-4.8%"
        y="-17.6%"
        filterUnits="objectBoundingBox"
      >
        <feOffset
          dy="2"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="38.5"
        ></feGaussianBlur>
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0240111451 0"
        ></feColorMatrix>
      </filter>
      <path
        id="b"
        d="M69.445 572.84L203.73 707.112a100 100 0 0070.708 29.286h70.693a100 100 0 0170.708 29.287l161.04 161.027A100 100 0 00647.584 956h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 00-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0121.788-9.025c17.017 0 30.812-13.795 30.812-30.812a30.81 30.81 0 00-9.025-21.788L855.85 430.11a100 100 0 00-70.708-29.287H550.7a100 100 0 01-70.708-29.287l-35.253-35.25A100 100 0 00374.032 307H138.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0016.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 01-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0011.915 28.764z"
      ></path>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(15)">
      <use fill="#000" filter="url(#a)" xlinkHref="#b"></use>
      <use fill="#141414" xlinkHref="#b"></use>
      <path
        fill="url(#c)"
        d="M207.445 265.84L341.73 400.112a100 100 0 0070.708 29.286h70.693a100 100 0 0170.708 29.287l161.04 161.027A100 100 0 00785.584 649h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 00-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0121.788-9.025c17.017 0 30.812-13.795 30.812-30.812a30.81 30.81 0 00-9.025-21.788L993.85 123.11a100 100 0 00-70.708-29.287H688.7a100 100 0 01-70.708-29.287l-35.253-35.25A100 100 0 00512.032 0H276.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0016.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 01-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0011.915 28.764z"
      ></path>
    </g>
  </svg>
  <img src={phonesImg} alt="Phones" style={{ zIndex: '2', position: 'relative', right: '-10%' }}/>
    </div>)
  }

  const mobileBackground = () =>{
    return <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="375"
    height="423"
    style={style}
  >
    <defs>
      <linearGradient id="c" x1="0%" x2="99.58%" y1="36.139%" y2="63.745%">
        <stop offset="0%" stopColor="#33D35E"></stop>
        <stop offset="100%" stopColor="#2AB6D9"></stop>
      </linearGradient>
      <filter
        id="a"
        width="116.9%"
        height="158.7%"
        x="-10.8%"
        y="-28.8%"
        filterUnits="objectBoundingBox"
      >
        <feOffset
          dy="2"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="38.5"
        ></feGaussianBlur>
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0240111451 0"
        ></feColorMatrix>
      </filter>
      <path
        id="b"
        d="M42.46 162.61l70.744 70.76a100 100 0 0070.719 29.298h11.03a100 100 0 0170.719 29.298l75.718 75.736A100 100 0 00412.109 397H633.78c27.507 0 49.805-22.299 49.805-49.805a49.805 49.805 0 00-14.583-35.213l-52.835-52.848c-7.359-7.36-7.357-19.294.003-26.653a18.846 18.846 0 0113.325-5.518c10.408 0 18.846-8.438 18.846-18.846a18.85 18.85 0 00-5.518-13.325L534.747 86.691a100 100 0 00-70.72-29.298H352.013a97.948 97.948 0 01-69.267-28.696A97.948 97.948 0 00213.477 0H84.94C65.505 0 49.75 15.755 49.75 35.19a35.19 35.19 0 0010.304 24.88L77.65 77.669c9.715 9.717 9.713 25.47-.004 35.185a24.88 24.88 0 01-17.59 7.285c-13.742 0-24.88 11.14-24.88 24.88a24.88 24.88 0 007.284 17.59z"
      ></path>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(-94 -52)">
      <use fill="#000" filter="url(#a)" xlinkHref="#b"></use>
      <use fill="#141414" xlinkHref="#b"></use>
      <path
        fill="url(#c)"
        d="M256.46 163.61l70.744 70.76a100 100 0 0070.719 29.298h11.03a100 100 0 0170.719 29.298l75.718 75.736A100 100 0 00626.109 398H847.78c27.507 0 49.805-22.299 49.805-49.805a49.805 49.805 0 00-14.583-35.213l-52.835-52.848c-7.359-7.36-7.357-19.294.003-26.653a18.846 18.846 0 0113.325-5.518c10.408 0 18.846-8.438 18.846-18.846a18.85 18.85 0 00-5.518-13.325L748.747 87.691a100 100 0 00-70.72-29.298H566.013a97.948 97.948 0 01-69.267-28.696A97.948 97.948 0 00427.477 1H298.94c-19.435 0-35.19 15.755-35.19 35.19a35.19 35.19 0 0010.304 24.88l17.595 17.599c9.715 9.717 9.713 25.47-.004 35.185a24.88 24.88 0 01-17.59 7.285c-13.742 0-24.88 11.14-24.88 24.88a24.88 24.88 0 007.284 17.59z"
      ></path>
    </g>
  </svg>
  }


  return isDesktop ? desktopBackground() : mobileBackground();
}

export default Backgroundsvg;