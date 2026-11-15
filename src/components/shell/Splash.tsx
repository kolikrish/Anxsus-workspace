/**
 * Boot splash (server-rendered so it paints before hydration).
 * Renders the app-frame skeleton (#appBorders) + a pulsing mark, per the
 * captured boot contract. Hidden by body.loaded / removed at fade-complete.
 */
export function Splash() {
  return (
    <div id="loading" aria-hidden="true">
      <div id="appBorders">
        <div id="loading-content">
          <div id="preloaderContent">
            <svg
              className="bkg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <rect
                x="4"
                y="4"
                width="56"
                height="56"
                rx="16"
                fill="var(--content-color)"
                opacity="0.15"
              />
            </svg>
          </div>
          <div id="loadingText">Loading&hellip;</div>
        </div>
      </div>
    </div>
  );
}
