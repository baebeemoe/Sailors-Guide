const codeTableBody = document.getElementById("codeTableBody");
const codeCount = document.getElementById("codeCount");
const activeCodeCount = document.getElementById("activeCodeCount");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
}

function parseExpiration(value) {
  if (!value) return null;
  const date = new Date(`${value}T23:59:59`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function isExpired(value) {
  const expiration = parseExpiration(value);
  return expiration ? Date.now() > expiration.getTime() : false;
}

function formatExpiration(value) {
  const date = parseExpiration(value);
  if (!date) return "No confirmed expiry";
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

async function copyCode(code, button) {
  try {
    await navigator.clipboard.writeText(code);
    const oldText = button.textContent;
    button.textContent = "Copied!";
    button.classList.add("copied");
    setTimeout(() => {
      button.textContent = oldText;
      button.classList.remove("copied");
    }, 1400);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = code;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    button.textContent = "Copied!";
    button.classList.add("copied");
    setTimeout(() => {
      button.textContent = "Copy";
      button.classList.remove("copied");
    }, 1400);
  }
}

function renderCodes() {
  const codes = Array.isArray(redeemCodes) ? redeemCodes : [];
  const activeCodes = codes.filter(item => !isExpired(item.expiration));

  codeCount.textContent = codes.length;
  activeCodeCount.textContent = activeCodes.length;

  if (!codes.length) {
    codeTableBody.innerHTML = `
      <tr class="codes-empty-row">
        <td colspan="5">
          <div class="codes-empty-state">
            <span class="codes-empty-icon">✦</span>
            <strong>No confirmed codes added yet</strong>
            <p>Confirmed Star Sailors redeem codes will appear here together with their rewards and expiration dates.</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  const sorted = [...codes].sort((a, b) => Number(isExpired(a.expiration)) - Number(isExpired(b.expiration)));

  codeTableBody.innerHTML = sorted.map((item, index) => {
    const expired = isExpired(item.expiration);
    return `
      <tr class="${expired ? "expired-code" : ""}">
        <td data-label="Code">
          <div class="code-value-wrap">
            <code>${item.code}</code>
          </div>
        </td>
        <td data-label="Reward">${item.reward || "—"}</td>
        <td data-label="Expiration">${formatExpiration(item.expiration)}</td>
        <td data-label="Status"><span class="code-status ${expired ? "expired" : "active"}">${expired ? "Expired" : "Active"}</span></td>
        <td data-label="Copy"><button class="copy-code-btn" data-index="${index}" ${expired ? "disabled" : ""}>${expired ? "Expired" : "Copy"}</button></td>
      </tr>
    `;
  }).join("");

  document.querySelectorAll(".copy-code-btn:not([disabled])").forEach(button => {
    button.addEventListener("click", () => {
      const item = sorted[Number(button.dataset.index)];
      copyCode(item.code, button);
    });
  });
}

renderCodes();
