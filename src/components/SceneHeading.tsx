import Reveal from "./Reveal";

type SceneHeadingProps = {
  title: string;
  text?: string;
};

export default function SceneHeading({ title, text }: SceneHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <h2 className="section-title text-balance">{title}</h2>
      {text ? <p className="section-copy">{text}</p> : null}
    </Reveal>
  );
}
