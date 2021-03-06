import { brandColors } from "../../constantes/colors";

const H3 = ({ id, children }) => (
  <div className="col s12">
    <h3 id={id}>{children}</h3>
    <style jsx>
      {`
        h3 {
          font-size: 2rem;
          font-variant: small-caps;
        }

        h3:before {
          background-color: #f0f0f0;
          content: "";
          display: inline-block;
          height: 1rem;
          margin-left: 2rem;
          margin-right: 1rem;
          width: 1rem;
        }

        @media only screen and (max-width: 992px) {
          h3 {
            text-align: center;
            font-size: 1.5rem;
          }

          h3:before {
            display: none;
          }
        }
      `}
    </style>
  </div>
);

export default H3;
