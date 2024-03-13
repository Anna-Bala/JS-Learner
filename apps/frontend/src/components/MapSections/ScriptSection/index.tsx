import './index.css';

const ScriptSection = () => (
  <div className="script-section">
    {[1, 2, 3, 4, 5].map(() => (
      <div className="block-slot"></div>
    ))}
  </div>
);

export default ScriptSection;
