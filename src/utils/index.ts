export const loadJsScript = ({ src, id, cb }: any) => {
  if (!src) {
    return;
  }
  const isExisted = document.getElementById(id);
  if (isExisted) {
    return;
  }
  const scriptElm = document.createElement("script");
  scriptElm.src = src;
  scriptElm.id = id;
  scriptElm.type = "text/javascript";
  if (document) {
    document.head.appendChild(scriptElm);
  }
  scriptElm.onload = () => {
    if (cb) cb();
  };
};
