import { ReactNode } from "react";
// import { Fragment } from "react";

interface Props {
    children: ReactNode
}

function Card(props: Props) {
    const {children} = props;

  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

interface CardBodyProps {
    title: string;
    text?: string;
}

 export function CardBody(props: CardBodyProps) {
    const {title, text} = props;
    
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {text}
        {/* Some quick example text to build on the card title and make up the bulk
        of the card's content. */}
      </p>
        {/* <a href="#" className="btn btn-primary">
         Go somewhere
        </a> */}
    </>
  );
}

export default Card;