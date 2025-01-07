import { isBigDesktop } from '../../utils';
import './index.scss';

type TProps = {
  resultIFrameSrcDoc: string;
};

const styles = `
  <style>
    body {
      font-size: 18px;
    }
  </style>
`;

const ResultSection = ({ resultIFrameSrcDoc }: TProps) => {
  const resultIFrameSrcDocWithStyling = `
  ${isBigDesktop ? styles : ''}
  ${resultIFrameSrcDoc}
  `;

  return <iframe className="result-section" id="resultIframe" srcDoc={resultIFrameSrcDocWithStyling}></iframe>;
};

export default ResultSection;
