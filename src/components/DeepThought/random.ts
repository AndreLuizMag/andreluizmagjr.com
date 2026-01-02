import { sentences } from './sentences';
import {SentenceType} from './type'

const getRandomSentence = (): SentenceType => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
}

const formatConsoleMessage = (data: SentenceType): void => {
  const styles = {
    sentence: 'font-size: 16px; font-weight: bold; padding: 16px 0px 8px 0px;',
    reference: 'color: #A3A3A3; font-size: 12px; font-style: italic;',
    divider: 'color: #A3A3A3;'
  };

  console.log('%c' + data.sentence, styles.sentence);
  console.log('%c' + data.book + ' - ' + data.chapter, styles.reference);
  console.log('%c' + '─'.repeat(50), styles.divider);
}

export const initConsoleEasterEgg = (): void => {
  if (typeof window === 'undefined') return;

  const randomSentence = getRandomSentence();

  setTimeout(() => {
    console.clear();
    console.log('     4444      22222');
    console.log('    44 44    22     22');
    console.log('   44  44            22');
    console.log('  44   44           22');
    console.log(' 44    44         22');
    console.log('44444444444     22');
    console.log('       44     22');
    console.log('       44   2222222222');
    formatConsoleMessage(randomSentence);
  }, 100);
}
