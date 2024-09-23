// ImportWalletModal.tsx
import { useState } from 'react';
import { Clipboard, ArrowRight, AlertCircle, X } from 'lucide-react';

interface ImportWalletProps {
  onClose: () => void;
}

const ImportWallet: React.FC<ImportWalletProps> = ({ onClose }) => {
  const [words, setWords] = useState<string[]>(Array(12).fill(''));
  const [error, setError] = useState<string>('');
  const [isMnemonicPasted, setIsMnemonicPasted] = useState<boolean>(false);
  const [mnemonic, setMnemonic] = useState<string | undefined>();

  const triggerPasteAction = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const pastedWords = text.toLowerCase().trim().split(/\s+/);
      if (pastedWords.length === 12) {
        setWords(pastedWords);
        setIsMnemonicPasted(true);
        setError('');
      } else {
        setError('Please paste all 12 words of your mnemonic phrase.');
      }
    } catch {
      setError('Failed to read clipboard. Please paste manually.');
    }
  };

  const handleAddWallet = () => {
    if (words.some(word => !word)) {
      setError('Please fill in all 12 words of your mnemonic phrase.');
      return;
    }
    const string = words.join(' ');
    setMnemonic(string);
    console.log(string); // Log the mnemonic string instead of the state variable
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-3xl p-6 bg-white dark:bg-black rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold py-4">Import Wallet with Mnemonic</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><X /></button>
        </div>
        <p className="text-sm text-gray-500 my-4 dark:text-gray-400 mt-2">
          Paste your 12-word mnemonic phrase to import your wallet.
        </p>

        {!isMnemonicPasted && (
          <button 
            onClick={triggerPasteAction}
            className="w-full p-4 items-center rounded-lg gap-1 bg-black hover:bg-white hover:text-black hover:scale-105 transition-all delay-75 dark:hover:text-white dark:hover:bg-black dark:bg-slate-200 text-white dark:text-black text-lg flex justify-center"
          >
            Copy your Mnemonic and Click here to Paste Mnemonic 
            <Clipboard className="ml-2 h-4 w-4" />
          </button>
        )}

        {isMnemonicPasted && (
          <>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
              {words.map((word, index) => (
                <div key={index} className="relative">
                  <input
                    type="text"
                    value={word}
                    readOnly
                    className="pl-8 pr-2 py-2 w-full bg-gray-100 dark:bg-gray-700 border border-slate-300 dark:border-slate-300 focus:border-purple-500 focus:ring-purple-500 rounded-md"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold">
                    {index + 1}.
                  </span>
                </div>
              ))}
            </div>

            {error && (
              <div className="mb-4 p-4 text-red-700 bg-red-100 border border-red-200 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                <div>
                  <p className="font-semibold">Error</p>
                  <p>{error}</p>
                </div>
              </div>
            )}

            <button 
              onClick={handleAddWallet} 
              className="w-full p-4 items-center rounded-lg gap-1 bg-black hover:bg-white hover:text-black hover:scale-105 transition-all delay-75 dark:hover:text-white dark:hover:bg-black dark:bg-slate-200 text-white dark:text-black text-lg flex justify-center"
            >
              Add Wallet
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImportWallet;
