import { brandColors } from "../../constantes/colors";

const H1 = ({ id, children }) => (
  <div className="col s12">
    <h1 id={id}>{children}</h1>
    <style jsx>
      {`
      h1 {
        text-align: center;
        color: ${brandColors.actual};
        font-variant: small-caps;
        font-size: 3rem;
        margin-bottom: 3rem;
      }

      @media only screen and (max-width: 992px) {
        h1 {
          font-size: 1.5rem;
        }
      }

      h1:after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 50%;
        padding-top: 20px;
        border-bottom: 0.25rem solid ${brandColors.actual};
      `}
    </style>
  </div>
);

export default H1;
