import { highlight } from "sugar-high";
import './styles.css'

const Test = () => {
  const codeExample = `export type NavigationType = {
  label: string;
  href: string;
}

export const footer: NavigationType[] = []
export const header: NavigationType[] = []
export const social: NavigationType[] = []`;

  // O highlight retorna uma string HTML com as tags de sintaxe
  const highlightedCode = highlight(codeExample);

  return (
    <main>
      <section className="p-block-9xl sm:p-block-3xl fade-in">
        <div className="container-sm ds-flex-start flow-col-nw gap-3xl">
          <h1>Blank page</h1>
        </div>
      </section>
      <section>
        <div className="container-sm">
          <pre data-language="typescript">
            <code
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
        </div>
      </section>
    </main>
  );
};

export default Test;
