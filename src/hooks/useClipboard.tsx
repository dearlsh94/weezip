const useClipboard = () => {
  const copyToClipboard = async (textToCopy: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(textToCopy);
        return true;
      }
      const textField = document.createElement('textarea');
      textField.innerText = textToCopy;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();
      return true;
    } catch (error) {
      return false;
    }
  };

  return { copyToClipboard };
};

export default useClipboard;
