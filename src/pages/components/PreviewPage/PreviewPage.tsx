import "./style.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

function PreviewPage() {
  const resumeData = useSelector((state: RootState) => state.resumeData);

  return (
    <div className="flex-auto flex justify-center items-center">
      <div className="preview-container">
        <div className="basic-info flex flex-col">
          <div className="top">
            <h2 className="name">{resumeData.fullname}</h2>
            <h6 className="headline">{resumeData.headline}</h6>
            <p className="summary">{resumeData.summary}</p>
          </div>
          <div className="bottom flex items-center justify-center">
            <div className="contact flex items-center">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
              </svg>
              <p>{resumeData.email}</p>
            </div>
            <div className="contact flex items-center">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                />
              </svg>
              <p>{resumeData.website}</p>
            </div>
            <div className="contact flex items-center">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{resumeData.phone}</p>
            </div>
            <div className="contact flex items-center">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{resumeData.location}</p>
            </div>
          </div>
        </div>
        <div className="main-data">
          <div className="left">
            <div className="experiences-wrapper">
              {resumeData.experiences.length != 0 && (
                <div className="section-heading">Work Experience</div>
              )}
              <div className="section-list">
                {resumeData.experiences.map((item) => (
                  <div key={item.id} className="section-item">
                    <div className="title-head">{item.position}</div>
                    <div className="sub-head">{item.company}</div>
                    <div className="sub-info">
                      <span>{item.daterange}</span>
                      <span>{item.companyLocation}</span>
                    </div>
                    <p className="company-summary">{item.companySummary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="right">
            {resumeData.skills.length != 0 && (
              <div className="section-heading">Skills</div>
            )}
            <div className="skills-list">
              {resumeData.skills.map((item, index) => (
                <div key={index} className="single-skill">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PreviewPage;
