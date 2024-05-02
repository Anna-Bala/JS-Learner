import './index.scss';

type TProps = {
  resultIFrameSrcDoc: string;
};

const ResultSection = ({ resultIFrameSrcDoc }: TProps) => (
  <iframe className="result-section" id="resultIframe" srcDoc={resultIFrameSrcDoc}></iframe>
);

export default ResultSection;
