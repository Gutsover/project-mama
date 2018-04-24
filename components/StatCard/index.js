import classnames from "classnames";

import { brandColors } from "../../constantes/colors";

import ScrollAnimation from "react-animate-on-scroll";

const StatCard = ({ cardClass, icone, children, className }) => {
  const classes = classnames("stat-card", "card-panel", className, {
    "card-colored": cardClass === "colored",
    "card-white": cardClass === "white"
  });

  return (
    <div className={classes}>
      <ScrollAnimation animateIn="fadeInDown">
        <i className="large material-icons">{icone}</i>
      </ScrollAnimation>
      {children}

      <style jsx global>
        {`
          .stat-card.card-panel {
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
          }

          .stat-card strong {
            font-size: 2rem;
            font-variant: small-caps;
          }

          .stat-card span {
            font-size: 1.5rem;
            font-variant: small-caps;
          }

          .stat-card.card-colored {
            background-color: ${brandColors.actual};
          }

          .stat-card.card-colored .material-icons {
            color: ${brandColors.fontColor};
          }

          .stat-card.card-white {
            background-color: white;
            border: 1px solid ${brandColors.actual};
          }

          .stat-card.card-white .material-icons {
            color: ${brandColors.actual};
          }

          .stat-card.card-white strong,
          .stat-card.card-white span {
            color: ${brandColors.actual} !important;
          }

          .stat-card.card-colored strong,
          .stat-card.card-colored span {
            color: white !important;
          }

          .stat-card.card-colored p {
            color: white;
          }

          .stat-card.card-colored i {
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default StatCard;
