// https://developers.google.com/recaptcha/docs/v3
declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function useRecaptchaToken(
  action: string,
  hideBadgeOnUnmount = true,
) {
  const siteKey = "6LfS_WcqAAAAAPPu4Fr54V6MdRKVMng3BOKXcYa0";
  const recaptchaLoaded = ref(false);
  let scriptElement = null;

  const setBadgeVisibility = (visible: boolean) => {
    const badge = document.querySelector(".grecaptcha-badge") as HTMLElement;
    if (badge) {
      badge.style.visibility = visible ? "visible" : "hidden";
    }
  };

  const loadReCaptcha = () => {
    return new Promise<void>((resolve, reject) => {
      scriptElement = document.createElement("script");
      scriptElement.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      scriptElement.onload = () => {
        recaptchaLoaded.value = true;
        resolve();
      };
      scriptElement.onerror = e => reject(e);
      document.head.appendChild(scriptElement);
    });
  };

  const getRecaptchaToken = async () => {
    if (!recaptchaLoaded.value) {
      await loadReCaptcha();
    }
    /* global grecaptcha */
    return await window.grecaptcha.execute(siteKey, { action });
  };

  onMounted(() => {
    if (!window.grecaptcha) {
      loadReCaptcha();
    }
    setBadgeVisibility(true);
  });

  onUnmounted(() => {
    if (hideBadgeOnUnmount) {
      setBadgeVisibility(false);
    }
  });

  return {
    getRecaptchaToken,
  };
}
