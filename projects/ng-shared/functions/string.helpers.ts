export const formatBytesString = (bytes: number, decimals?: number) => {
  /*if (bytes < 1024) return bytes + " Bytes";
	else if (bytes < 1048576) return (bytes / 1024).toFixed(0) + " KB";
	else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + " MB";
	else return (bytes / 1073741824).toFixed(1) + " GB";*/

  if (bytes == 0) return '0 Bytes';
  const k = 1024,
    dm = decimals || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
