import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vaultly: Case Study | Femi Akinsiku",
  description:
    "Deep dive into Vaultly: a full-stack CIAM / SSO platform with RS256 JWTs, OAuth 2.0 PKCE, TOTP MFA, refresh token rotation, and multi-tenant organisations.",
};

const C = {
  navy: "#0a192f",
  lightNavy: "#112240",
  lightestNavy: "#233554",
  slate: "#8892b0",
  lightSlate: "#a8b2d8",
  lightestSlate: "#ccd6f6",
  teal: "#64ffda",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xs font-bold uppercase tracking-widest mb-6"
      style={{ color: C.teal }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-semibold mb-3" style={{ color: C.lightestSlate }}>
      {children}
    </h3>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre
      className="text-xs p-4 rounded overflow-x-auto leading-relaxed my-4"
      style={{
        backgroundColor: C.lightNavy,
        color: C.lightSlate,
        fontFamily: "var(--font-geist-mono), monospace",
      }}
    >
      {children}
    </pre>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-medium"
      style={{ backgroundColor: "rgba(100,255,218,0.1)", color: C.teal }}
    >
      {children}
    </span>
  );
}

function DiagramBox({
  label,
  sub,
  accent = false,
  width = 120,
}: {
  label: string;
  sub?: string;
  accent?: boolean;
  width?: number;
}) {
  return (
    <div
      style={{
        backgroundColor: C.lightNavy,
        border: `1px solid ${accent ? C.teal : C.lightestNavy}`,
        borderRadius: 6,
        padding: "8px 14px",
        textAlign: "center",
        minWidth: width,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          color: accent ? C.teal : C.lightestSlate,
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        {label}
      </div>
      {sub && (
        <div style={{ color: C.slate, fontSize: 10, marginTop: 2 }}>{sub}</div>
      )}
    </div>
  );
}

function Arrow({
  label,
  vertical = false,
}: {
  label?: string;
  vertical?: boolean;
}) {
  if (vertical) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          margin: "4px 0",
        }}
      >
        {label && <span style={{ color: C.slate, fontSize: 9 }}>{label}</span>}
        <div
          style={{ width: 1, height: 20, backgroundColor: C.lightestNavy }}
        />
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: `6px solid ${C.lightestNavy}`,
          }}
        />
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        margin: "0 4px",
      }}
    >
      {label && <span style={{ color: C.slate, fontSize: 9 }}>{label}</span>}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ width: 20, height: 1, backgroundColor: C.lightestNavy }}
        />
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: "4px solid transparent",
            borderBottom: "4px solid transparent",
            borderLeft: `6px solid ${C.lightestNavy}`,
          }}
        />
      </div>
    </div>
  );
}

function SequenceStep({
  step,
  from,
  to,
  label,
  note,
  returning = false,
}: {
  step: number;
  from: string;
  to: string;
  label: string;
  note?: string;
  returning?: boolean;
}) {
  return (
    <div
      className="flex items-start gap-4 py-3"
      style={{ borderBottom: `1px solid ${C.lightestNavy}` }}
    >
      <span
        className="shrink-0 text-xs font-bold w-5 text-right mt-0.5"
        style={{ color: C.teal }}
      >
        {step}
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="text-xs font-semibold"
            style={{ color: C.lightestSlate }}
          >
            {from}
          </span>
          <span style={{ color: C.slate, fontSize: 12 }}>
            {returning ? "←" : "→"}
          </span>
          <span
            className="text-xs font-semibold"
            style={{ color: C.lightestSlate }}
          >
            {to}
          </span>
          <span className="text-xs" style={{ color: C.lightSlate }}>
            {label}
          </span>
        </div>
        {note && (
          <p className="text-xs mt-1" style={{ color: C.slate }}>
            {note}
          </p>
        )}
      </div>
    </div>
  );
}

export default function VaultlyCaseStudy() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: C.navy, color: C.slate }}
    >
      <div className="max-w-3xl mx-auto px-6 py-20 md:px-12 lg:px-6">
        {/* Back link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 mb-12 text-sm font-medium"
          style={{ color: C.slate, textDecoration: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:-translate-x-1"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Femi Akinsiku
        </Link>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Pill>Case Study</Pill>
            <Pill>Full-Stack</Pill>
            <Pill>Auth / CIAM</Pill>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ color: C.lightestSlate }}
          >
            Vaultly
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: C.lightSlate }}
          >
            A full-stack Customer Identity and Access Management (CIAM) / SSO
            platform built from first principles, built to understand every
            layer of identity infrastructure from cryptographic token issuance
            to multi-tenant org management.
          </p>

          {/* Meta */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Type", value: "Solo · Full-stack" },
              { label: "Stack", value: "Next.js 15 · Node.js" },
              { label: "Auth standard", value: "OAuth 2.0 · OIDC" },
              {
                label: "Live demo",
                value: "vaultly.vercel.app →",
                href: "https://much-auth-my-app.vercel.app/dashboard",
              },
              {
                label: "Source",
                value: "GitHub →",
                href: "https://github.com/akinsikuoluwafemi/much-auth",
              },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <p
                  className="text-xs uppercase tracking-wide mb-1"
                  style={{ color: C.slate }}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium"
                    style={{ color: C.teal }}
                  >
                    {value}
                  </a>
                ) : (
                  <p
                    className="text-sm font-medium"
                    style={{ color: C.lightestSlate }}
                  >
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Full stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Next.js 15",
              "App Router",
              "Turbopack",
              "Node.js",
              "Express",
              "TypeScript",
              "PostgreSQL",
              "Drizzle ORM",
              "iron-session",
              "otplib",
              "Resend",
              "Tailwind CSS v4",
              "Docker",
              "pnpm workspaces",
            ].map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>

        <div
          style={{ borderTop: `1px solid ${C.lightestNavy}` }}
          className="mb-14"
        />

        {/* 1. WHY */}
        <section className="mb-16">
          <SectionLabel>Why I Built This</SectionLabel>
          <div className="space-y-4 leading-relaxed">
            <p>
              Most engineers integrate authentication via a third-party provider
              and never look inside. I wanted to understand what{" "}
              <em style={{ color: C.lightSlate }}>actually happens</em>: how
              tokens are issued, how rotation works, how you prevent token
              theft, how multi-tenant isolation holds at every layer. The only
              way to learn this is to build it.
            </p>
            <p>
              Vaultly is that build. It implements the full auth server from
              scratch: cryptographic key management, JWT issuance, OAuth 2.0
              PKCE, TOTP MFA, refresh token families with reuse detection, and
              multi-tenant organisations with RBAC. Every decision is
              intentional and documented through the system.
            </p>
          </div>
        </section>

        {/* 2. SYSTEM ARCHITECTURE */}
        <section className="mb-16">
          <SectionLabel>System Architecture</SectionLabel>
          <p className="leading-relaxed mb-6">
            The system is split into two services communicating
            server-to-server. The browser never directly touches the auth
            server. All calls are proxied through the Next.js BFF, keeping the
            auth server URL and credentials out of the client entirely.
          </p>

          {/* Architecture diagram */}
          <div
            className="rounded-lg p-6 overflow-x-auto"
            style={{
              backgroundColor: C.lightNavy,
              border: `1px solid ${C.lightestNavy}`,
            }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: C.slate }}
            >
              System Overview
            </p>

            {/* Row 1: Browser → BFF → Auth Server */}
            <div className="flex items-center gap-0 flex-wrap mb-2">
              <DiagramBox label="Browser" sub="Client" width={100} />
              <Arrow label="HTTP-only cookie" />
              <DiagramBox
                label="Next.js BFF"
                sub="App Router · Route Handlers"
                accent
                width={160}
              />
              <Arrow label="server-to-server" />
              <DiagramBox
                label="Auth Server"
                sub="Express · Node.js"
                accent
                width={140}
              />
            </div>

            {/* Row 2: BFF note */}
            <div className="flex items-start gap-0 mt-1 mb-6 pl-[116px]">
              <div style={{ fontSize: 10, color: C.slate, paddingLeft: 8 }}>
                ↑ iron-session encrypted cookie · browser never sees auth-server
                URL
              </div>
            </div>

            {/* Row 3: Auth Server → deps */}
            <div className="flex items-start gap-6 pl-[328px] flex-wrap">
              <div className="flex flex-col items-center gap-1">
                <Arrow vertical label="Drizzle ORM" />
                <DiagramBox
                  label="PostgreSQL"
                  sub="Users · Orgs · Tokens · Audit log"
                  width={180}
                />
              </div>
              <div className="flex flex-col items-center gap-1">
                <Arrow vertical label="SMTP" />
                <DiagramBox label="Resend" sub="Org invitations" width={130} />
              </div>
              <div className="flex flex-col items-center gap-1">
                <Arrow vertical label="JWKS" />
                <DiagramBox
                  label="RSA Key Pair"
                  sub="RS256 signing"
                  width={130}
                />
              </div>
            </div>
          </div>

          <div
            className="mt-4 text-xs leading-relaxed space-y-1"
            style={{ color: C.slate }}
          >
            <p>
              <span style={{ color: C.lightestSlate }}>
                Why a separate auth server?
              </span>{" "}
              Decoupling auth from the Next.js app means the auth server can
              serve multiple clients (web, mobile, other services) without
              duplication. The JWKS endpoint lets any service verify tokens
              independently.
            </p>
          </div>
        </section>

        {/* 3. JWT STRATEGY */}
        <section className="mb-16">
          <SectionLabel>JWT Architecture</SectionLabel>
          <div className="space-y-6">
            <div>
              <SubHeading>RS256 with Locally-Managed RSA Key Pair</SubHeading>
              <p className="leading-relaxed mb-3">
                The auth server owns an RSA key pair. Private key signs all
                JWTs; public key is served at{" "}
                <code
                  style={{
                    backgroundColor: C.lightestNavy,
                    color: C.teal,
                    padding: "1px 6px",
                    borderRadius: 3,
                    fontSize: 12,
                  }}
                >
                  /jwks.json
                </code>
                . Any service can verify tokens without ever holding a shared
                secret. Just fetch the public key and verify the signature
                locally.
              </p>
              <CodeBlock>{`// JWT payload structure
{
  "sub": "user-uuid",
  "email": "user@example.com",
  "role": "admin",                 // RBAC role
  "org_id": "org-uuid",           // tenant scope
  "org_role": "member",           // org-level role
  "token_version": 3,             // for invalidation
  "iat": 1718000000,
  "exp": 1718000900               // 15-min access token
}

// JWKS endpoint response
GET /jwks.json
{
  "keys": [{
    "kty": "RSA",
    "use": "sig",
    "alg": "RS256",
    "kid": "2025-06",
    "n": "...",   // public modulus
    "e": "AQAB"
  }]
}`}</CodeBlock>
              <p className="text-sm leading-relaxed" style={{ color: C.slate }}>
                <span style={{ color: C.lightestSlate }}>
                  Why RS256 over HS256?
                </span>{" "}
                With HS256, every verifying service needs the shared secret,
                which can leak. RS256 lets you publish the public key openly.
                Compromise of any downstream service cannot be used to forge
                tokens.
              </p>
            </div>
          </div>
        </section>

        {/* 4. OAUTH PKCE */}
        <section className="mb-16">
          <SectionLabel>OAuth 2.0 PKCE Flow</SectionLabel>
          <p className="leading-relaxed mb-6">
            Social login (Google, GitHub) uses the Authorization Code flow with
            PKCE (Proof Key for Code Exchange). PKCE prevents authorization code
            interception attacks, which is critical in public clients where a
            client secret can&apos;t be kept confidential.
          </p>

          <div
            className="rounded-lg overflow-hidden"
            style={{ border: `1px solid ${C.lightestNavy}` }}
          >
            <div
              className="px-4 py-3 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: C.lightNavy,
                borderBottom: `1px solid ${C.lightestNavy}`,
                color: C.slate,
              }}
            >
              <span>User</span>
              <span style={{ color: C.teal }}>Next.js BFF</span>
              <span>GitHub / Google</span>
              <span style={{ color: C.teal }}>Auth Server</span>
              <span>PostgreSQL</span>
            </div>
            <div className="px-4 pb-2" style={{ backgroundColor: "#0d1f35" }}>
              {[
                {
                  step: 1,
                  from: "User",
                  to: "BFF",
                  label: 'clicks "Sign in with GitHub"',
                },
                {
                  step: 2,
                  from: "BFF",
                  to: "BFF",
                  label:
                    "generates code_verifier (random 64 bytes) + SHA-256 code_challenge",
                  note: "Stored in server-side session, never exposed to browser",
                },
                {
                  step: 3,
                  from: "BFF",
                  to: "GitHub",
                  label:
                    "redirect: /authorize?code_challenge=…&code_challenge_method=S256",
                },
                {
                  step: 4,
                  from: "GitHub",
                  to: "User",
                  label: "OAuth consent screen",
                },
                {
                  step: 5,
                  from: "GitHub",
                  to: "BFF",
                  label: "callback with auth code",
                  returning: true,
                },
                {
                  step: 6,
                  from: "BFF",
                  to: "Auth Server",
                  label:
                    "POST /auth/oauth/callback { code, code_verifier, provider }",
                },
                {
                  step: 7,
                  from: "Auth Server",
                  to: "GitHub",
                  label:
                    "exchange: code + code_verifier → access token (GitHub verifies PKCE)",
                },
                {
                  step: 8,
                  from: "Auth Server",
                  to: "PostgreSQL",
                  label: "upsert user (email, provider, provider_id)",
                },
                {
                  step: 9,
                  from: "Auth Server",
                  to: "BFF",
                  label: "RS256 JWT + refresh token",
                  returning: true,
                },
                {
                  step: 10,
                  from: "BFF",
                  to: "Browser",
                  label: "set iron-session cookie (HTTP-only, encrypted)",
                  returning: true,
                  note: "Browser receives an opaque session, never the raw JWT",
                },
              ].map((s) => (
                <SequenceStep key={s.step} {...s} />
              ))}
            </div>
          </div>

          <div
            className="mt-4 text-sm leading-relaxed space-y-2"
            style={{ color: C.slate }}
          >
            <p>
              <span style={{ color: C.lightestSlate }}>
                Social users get identical JWTs.
              </span>{" "}
              Whether you signed in with email/password or GitHub, you receive
              the same RS256 JWT. Downstream services don&apos;t need to know
              how you authenticated.
            </p>
          </div>
        </section>

        {/* 5. TOKEN ROTATION */}
        <section className="mb-16">
          <SectionLabel>
            Refresh Token Rotation &amp; Reuse Detection
          </SectionLabel>
          <p className="leading-relaxed mb-6">
            Access tokens are short-lived (15 min). Refresh tokens are
            longer-lived (7 days) but rotate on every use. The critical security
            property: if a stolen refresh token is replayed, the system detects
            it and revokes the entire token family, forcing re-authentication.
          </p>

          {/* Token family diagram */}
          <div
            className="rounded-lg p-6"
            style={{
              backgroundColor: C.lightNavy,
              border: `1px solid ${C.lightestNavy}`,
            }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: C.slate }}
            >
              Token Family: Normal Flow
            </p>

            <div className="flex items-center gap-2 flex-wrap mb-6">
              {[
                { label: "RT-1", sub: "issued at login", used: true },
                { label: "RT-2", sub: "issued on refresh", used: true },
                { label: "RT-3", sub: "issued on refresh", used: false },
              ].map((t, i) => (
                <div key={t.label} className="flex items-center gap-2">
                  <div
                    style={{
                      backgroundColor: t.used ? C.lightestNavy : "#0a192f",
                      border: `1px solid ${t.used ? C.slate : C.teal}`,
                      borderRadius: 6,
                      padding: "8px 14px",
                      textAlign: "center",
                      opacity: t.used ? 0.6 : 1,
                    }}
                  >
                    <div
                      style={{
                        color: t.used ? C.slate : C.teal,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {t.label}
                    </div>
                    <div style={{ color: C.slate, fontSize: 10, marginTop: 2 }}>
                      {t.used ? "used → invalidated" : t.sub}
                    </div>
                  </div>
                  {i < 2 && (
                    <span style={{ color: C.slate, fontSize: 18 }}>→</span>
                  )}
                </div>
              ))}
              <div style={{ fontSize: 10, color: C.slate, marginLeft: 8 }}>
                ← active token
              </div>
            </div>

            <div
              style={{ borderTop: `1px solid ${C.lightestNavy}` }}
              className="pt-4"
            >
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: "#ff6b6b" }}
              >
                Reuse Attack: RT-1 Replayed After RT-2 Issued
              </p>
              <div className="flex items-start gap-4 flex-wrap">
                <div
                  style={{
                    backgroundColor: "rgba(255,107,107,0.08)",
                    border: "1px solid rgba(255,107,107,0.3)",
                    borderRadius: 6,
                    padding: "10px 16px",
                    flex: 1,
                    minWidth: 200,
                  }}
                >
                  <p
                    style={{
                      color: "#ff6b6b",
                      fontSize: 11,
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    DETECTED: RT-1 already used
                  </p>
                  <ul style={{ color: C.slate, fontSize: 11, lineHeight: 1.8 }}>
                    <li>Entire token family revoked (RT-1, RT-2, RT-3)</li>
                    <li>All active sessions invalidated</li>
                    <li>User forced to re-authenticate</li>
                    <li>Security event logged with IP + user agent</li>
                  </ul>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(100,255,218,0.05)",
                    border: `1px solid rgba(100,255,218,0.2)`,
                    borderRadius: 6,
                    padding: "10px 16px",
                    flex: 1,
                    minWidth: 200,
                  }}
                >
                  <p
                    style={{
                      color: C.teal,
                      fontSize: 11,
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    Why this works
                  </p>
                  <p style={{ color: C.slate, fontSize: 11, lineHeight: 1.8 }}>
                    Each refresh token has a{" "}
                    <code style={{ color: C.lightSlate }}>family_id</code>. The
                    DB stores which token is the current valid one in each
                    family. Any use of a non-current token in a family is
                    definitionally a replay.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock>{`-- Token family schema
CREATE TABLE refresh_tokens (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id   UUID NOT NULL,          -- links the rotation chain
  user_id     UUID NOT NULL,
  token_hash  TEXT NOT NULL,          -- bcrypt hash, never raw
  is_current  BOOLEAN DEFAULT true,   -- only one true per family
  used_at     TIMESTAMPTZ,
  expires_at  TIMESTAMPTZ NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- On refresh: set old token is_current=false, insert new token
-- On replay detection: DELETE WHERE family_id = $1`}</CodeBlock>
        </section>

        {/* 6. TOTP MFA */}
        <section className="mb-16">
          <SectionLabel>TOTP MFA (RFC 6238)</SectionLabel>
          <div className="space-y-4 leading-relaxed">
            <p>
              MFA is implemented via Time-based One-Time Passwords using{" "}
              <code
                style={{
                  backgroundColor: C.lightestNavy,
                  color: C.teal,
                  padding: "1px 6px",
                  borderRadius: 3,
                  fontSize: 12,
                }}
              >
                otplib
              </code>
              . The flow follows the standard provisioning pattern used by
              Google Authenticator, Authy, and 1Password.
            </p>

            <div
              className="rounded-lg overflow-hidden"
              style={{ border: `1px solid ${C.lightestNavy}` }}
            >
              <div
                className="px-4 py-3 text-xs font-bold uppercase tracking-widest"
                style={{
                  backgroundColor: C.lightNavy,
                  borderBottom: `1px solid ${C.lightestNavy}`,
                  color: C.slate,
                }}
              >
                MFA Provisioning + Verification Flow
              </div>
              <div className="px-4 pb-2" style={{ backgroundColor: "#0d1f35" }}>
                {[
                  {
                    step: 1,
                    from: "User",
                    to: "BFF",
                    label: "POST /auth/mfa/setup",
                  },
                  {
                    step: 2,
                    from: "Auth Server",
                    to: "Auth Server",
                    label: "generate TOTP secret (base32, 20 bytes)",
                    note: "otplib.authenticator.generateSecret()",
                  },
                  {
                    step: 3,
                    from: "Auth Server",
                    to: "BFF",
                    label: "returns otpauth:// URI + QR code data URL",
                    returning: true,
                  },
                  {
                    step: 4,
                    from: "BFF",
                    to: "User",
                    label:
                      "display QR code (user scans with authenticator app)",
                    returning: true,
                  },
                  {
                    step: 5,
                    from: "User",
                    to: "BFF",
                    label: "POST /auth/mfa/verify { token: '123456' }",
                  },
                  {
                    step: 6,
                    from: "Auth Server",
                    to: "Auth Server",
                    label: "otplib.authenticator.verify({ token, secret })",
                    note: "Accepts current + ±1 window (30s each) for clock skew",
                  },
                  {
                    step: 7,
                    from: "Auth Server",
                    to: "PostgreSQL",
                    label:
                      "store mfa_secret (encrypted at rest), set mfa_enabled=true",
                  },
                  {
                    step: 8,
                    from: "Auth Server",
                    to: "BFF",
                    label: "MFA confirmed; subsequent logins require TOTP",
                    returning: true,
                  },
                ].map((s) => (
                  <SequenceStep key={s.step} {...s} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. BFF PATTERN */}
        <section className="mb-16">
          <SectionLabel>
            BFF Pattern: Why the Auth Server URL Never Reaches the Browser
          </SectionLabel>

          <div
            className="rounded-lg p-6 mb-6"
            style={{
              backgroundColor: C.lightNavy,
              border: `1px solid ${C.lightestNavy}`,
            }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: C.slate }}
            >
              Request Flow
            </p>
            <div className="space-y-3">
              {/* Browser row */}
              <div className="flex items-center gap-3">
                <DiagramBox label="Browser" sub="React client" width={120} />
                <div style={{ flex: 1 }}>
                  <div className="flex items-center gap-2">
                    <Arrow />
                    <span style={{ color: C.lightSlate, fontSize: 11 }}>
                      POST /api/auth/login (same origin)
                    </span>
                  </div>
                </div>
              </div>

              {/* BFF row */}
              <div className="flex items-center gap-3 pl-6">
                <DiagramBox
                  label="Next.js Route Handler"
                  sub="/app/api/auth/login/route.ts"
                  accent
                  width={200}
                />
                <div style={{ flex: 1 }}>
                  <div className="flex items-center gap-2">
                    <Arrow />
                    <span style={{ color: C.lightSlate, fontSize: 11 }}>
                      POST http://auth-server:4000/auth/login (internal)
                    </span>
                  </div>
                </div>
              </div>

              {/* Auth server row */}
              <div className="flex items-center gap-3 pl-12">
                <DiagramBox
                  label="Auth Server"
                  sub="Express · port 4000"
                  width={150}
                />
                <Arrow label="returns JWT" />
                <div style={{ fontSize: 11, color: C.slate }}>
                  BFF stores in iron-session cookie. Browser gets a session,
                  never the JWT.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <span style={{ color: C.lightestSlate }}>
                The auth server URL is an environment variable.
              </span>{" "}
              It never appears in any client bundle. If the BFF is compromised,
              an attacker gets the session cookie, but the auth server remains
              unexposed to the public internet.
            </p>
            <p>
              <span style={{ color: C.lightestSlate }}>
                iron-session for encrypted HTTP-only cookies.
              </span>{" "}
              Session data is AES-256-GCM encrypted with a server-side password.
              The browser cannot read it, cannot modify it, and cannot forge it
              without the server secret.
            </p>

            <SubHeading>The Server Component Cookie Problem</SubHeading>
            <p>
              Next.js Server Components run on the server but{" "}
              <em style={{ color: C.lightSlate }}>cannot write cookies</em> —
              only Route Handlers can. This creates a problem: when a Server
              Component detects a stale access token, how does it trigger a
              refresh?
            </p>
            <CodeBlock>{`// The solution: Server Component detects stale token,
// redirects through a Route Handler that performs the refresh

// app/layout.tsx (Server Component)
const session = await getIronSession(cookies(), sessionOptions);
if (isTokenExpired(session.accessToken)) {
  redirect('/api/auth/silent-refresh');  // → Route Handler
}

// app/api/auth/silent-refresh/route.ts (Route Handler)
export async function GET(req: Request) {
  const session = await getIronSession(cookies(), sessionOptions);
  const newTokens = await refreshAccessToken(session.refreshToken);
  session.accessToken = newTokens.accessToken;
  session.refreshToken = newTokens.refreshToken;
  await session.save();  // ← can write cookies here
  return redirect(req.headers.get('referer') || '/');
}`}</CodeBlock>

            <SubHeading>
              TokenRefresher Client Component: Silent Proactive Refresh
            </SubHeading>
            <p>
              For active sessions, a client-side component schedules a refresh
              60 seconds before expiry without interrupting the user:
            </p>
            <CodeBlock>{`// components/TokenRefresher.tsx
'use client';
export function TokenRefresher({ expiresAt }: { expiresAt: number }) {
  useEffect(() => {
    const msUntilRefresh = expiresAt * 1000 - Date.now() - 60_000;
    if (msUntilRefresh <= 0) return;

    const timer = setTimeout(async () => {
      await fetch('/api/auth/silent-refresh');
      router.refresh();  // revalidate all Server Components
    }, msUntilRefresh);

    return () => clearTimeout(timer);
  }, [expiresAt]);
  return null;
}`}</CodeBlock>
          </div>
        </section>

        {/* 8. MULTI-TENANCY */}
        <section className="mb-16">
          <SectionLabel>Multi-Tenancy &amp; RBAC</SectionLabel>

          <div className="space-y-8">
            <div>
              <SubHeading>Organisation Data Model</SubHeading>
              <CodeBlock>{`-- Core tables (simplified)
CREATE TABLE users (
  id            UUID PRIMARY KEY,
  email         TEXT UNIQUE NOT NULL,
  password_hash TEXT,                    -- null for OAuth users
  mfa_secret    TEXT,                    -- encrypted
  mfa_enabled   BOOLEAN DEFAULT false,
  token_version INT DEFAULT 0,           -- invalidation counter
  created_at    TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE organisations (
  id         UUID PRIMARY KEY,
  name       TEXT NOT NULL,
  slug       TEXT UNIQUE NOT NULL,
  owner_id   UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE org_members (
  org_id     UUID REFERENCES organisations(id),
  user_id    UUID REFERENCES users(id),
  role       TEXT CHECK (role IN ('admin','member','viewer')),
  joined_at  TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (org_id, user_id)
);

CREATE TABLE org_invitations (
  id          UUID PRIMARY KEY,
  org_id      UUID REFERENCES organisations(id),
  email       TEXT NOT NULL,
  role        TEXT NOT NULL,
  token       TEXT UNIQUE NOT NULL,    -- signed invite token
  expires_at  TIMESTAMPTZ NOT NULL,   -- 48hr window
  accepted_at TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT now()
);`}</CodeBlock>
            </div>

            <div>
              <SubHeading>RBAC Model</SubHeading>
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: `1px solid ${C.lightestNavy}` }}
              >
                <div
                  className="grid grid-cols-4 text-xs font-bold uppercase tracking-wider px-4 py-3"
                  style={{
                    backgroundColor: C.lightNavy,
                    borderBottom: `1px solid ${C.lightestNavy}`,
                    color: C.slate,
                  }}
                >
                  <span>Role</span>
                  <span>Read</span>
                  <span>Write</span>
                  <span>Manage Members</span>
                </div>
                {[
                  { role: "admin", read: true, write: true, manage: true },
                  { role: "member", read: true, write: true, manage: false },
                  { role: "viewer", read: true, write: false, manage: false },
                ].map(({ role, read, write, manage }) => (
                  <div
                    key={role}
                    className="grid grid-cols-4 px-4 py-3 text-sm"
                    style={{
                      borderBottom: `1px solid ${C.lightestNavy}`,
                      color: C.lightSlate,
                    }}
                  >
                    <span style={{ color: C.lightestSlate, fontWeight: 500 }}>
                      {role}
                    </span>
                    <span style={{ color: read ? C.teal : C.slate }}>
                      {read ? "✓" : "—"}
                    </span>
                    <span style={{ color: write ? C.teal : C.slate }}>
                      {write ? "✓" : "—"}
                    </span>
                    <span style={{ color: manage ? C.teal : C.slate }}>
                      {manage ? "✓" : "—"}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="text-xs mt-3 leading-relaxed"
                style={{ color: C.slate }}
              >
                Role is included in the JWT payload (
                <code style={{ color: C.teal, fontSize: 11 }}>org_role</code>)
                and enforced via Express middleware on every protected route; no
                additional DB lookup needed for permission checks on hot paths.
              </p>
            </div>

            <div>
              <SubHeading>Org Switcher: Scoped JWT Reissue</SubHeading>
              <p className="text-sm leading-relaxed">
                When a user switches organisations, the auth server issues a new
                JWT scoped to the target org. The BFF updates the session and
                calls{" "}
                <code
                  style={{
                    backgroundColor: C.lightestNavy,
                    color: C.teal,
                    padding: "1px 6px",
                    borderRadius: 3,
                    fontSize: 12,
                  }}
                >
                  router.refresh()
                </code>{" "}
                to revalidate all Server Components with the new org context.
                Stale tokens are detected server-side and silently reissued
                before the component renders.
              </p>
            </div>
          </div>
        </section>

        {/* 9. AUDIT LOG */}
        <section className="mb-16">
          <SectionLabel>Full Audit Log</SectionLabel>
          <p className="leading-relaxed mb-4">
            Every meaningful event is recorded to PostgreSQL with enough context
            to reconstruct what happened, who did it, from where, and when.
          </p>
          <CodeBlock>{`CREATE TABLE audit_log (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES users(id),
  org_id      UUID REFERENCES organisations(id),
  event       TEXT NOT NULL,      -- 'login.success', 'mfa.enabled', etc.
  metadata    JSONB,              -- event-specific details
  ip_address  INET,
  user_agent  TEXT,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Indexed for fast per-user and per-org queries
CREATE INDEX audit_log_user_id_idx ON audit_log(user_id, created_at DESC);
CREATE INDEX audit_log_org_id_idx  ON audit_log(org_id,  created_at DESC);

-- Events captured:
-- login.success / login.failure / login.mfa_required
-- mfa.enabled / mfa.disabled / mfa.challenge_failed
-- token.refreshed / token.family_revoked (reuse detected)
-- org.created / org.member_invited / org.member_removed
-- org.role_changed / org.invitation_accepted`}</CodeBlock>
        </section>

        {/* 10. SECURITY MODEL */}
        <section className="mb-16">
          <SectionLabel>Security Model</SectionLabel>
          <div className="space-y-2">
            {[
              {
                threat: "Token forgery",
                mitigation:
                  "RS256 with locally-managed private key. Attacker would need the private key to forge any token.",
              },
              {
                threat: "Token theft",
                mitigation:
                  "HTTP-only + Secure + SameSite=Strict cookies. XSS cannot read the session. CSRF attacks are blocked by SameSite.",
              },
              {
                threat: "Refresh token replay",
                mitigation:
                  "Token family tracking with reuse detection. Any replay revokes the entire family and forces re-auth.",
              },
              {
                threat: "Brute force",
                mitigation:
                  "Rate limiting at 10 attempts/min per email. Login failures add progressive delay. Events logged with IP.",
              },
              {
                threat: "MFA bypass",
                mitigation:
                  "Access token is only issued after MFA verification. No partial-auth state is persisted client-side.",
              },
              {
                threat: "Timing attacks",
                mitigation:
                  "bcrypt for password hashing (constant-time comparison). TOTP comparison through otplib (constant-time).",
              },
              {
                threat: "Auth server exposure",
                mitigation:
                  "BFF proxy pattern. The auth server is internal, never directly accessible from the public internet.",
              },
              {
                threat: "Stale permissions",
                mitigation:
                  "Role is embedded in JWT. token_version on the user record allows instant invalidation of all sessions on role change.",
              },
            ].map(({ threat, mitigation }) => (
              <div
                key={threat}
                className="flex gap-4 p-4 rounded"
                style={{ backgroundColor: C.lightNavy }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-wide shrink-0 mt-0.5"
                  style={{ color: C.teal, minWidth: 150 }}
                >
                  {threat}
                </span>
                <span className="text-sm leading-relaxed">{mitigation}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 11. KEY DECISIONS */}
        <section className="mb-16">
          <SectionLabel>Key Engineering Decisions</SectionLabel>
          <div className="space-y-6">
            {[
              {
                decision: "Drizzle ORM over Prisma",
                why: "Drizzle is closer to raw SQL: schema definitions are TypeScript, queries compose like SQL. For a system where understanding exactly what hits the database matters, this beats Prisma's magic. Query performance is fully predictable.",
              },
              {
                decision: "iron-session over NextAuth",
                why: "NextAuth abstracts away exactly the things I needed to understand: how the session is stored, what's in the cookie, how expiry works. iron-session gives encrypted HTTP-only cookies with zero magic. Every byte in the cookie is mine to control.",
              },
              {
                decision: "pnpm workspaces monorepo",
                why: "Auth server and Next.js BFF share TypeScript types (request/response shapes, JWT payload). A monorepo with a shared `packages/types` package means a change to the JWT payload is a compile error in both services immediately.",
              },
              {
                decision: "otplib for TOTP",
                why: "RFC 6238 compliant, actively maintained, and the verify function handles the ±1 window (clock skew) correctly. Building TOTP from scratch would be a security anti-pattern.",
              },
              {
                decision: "Resend for invitation emails",
                why: "Email deliverability is an operational problem, not an engineering one. Resend provides a clean API, good developer experience, and handles SPF/DKIM. Invitation tokens are signed server-side; Resend only delivers the link.",
              },
            ].map(({ decision, why }) => (
              <div key={decision}>
                <h3
                  className="font-semibold mb-1 text-sm"
                  style={{ color: C.lightestSlate }}
                >
                  {decision}
                </h3>
                <p className="text-sm leading-relaxed">{why}</p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{ borderTop: `1px solid ${C.lightestNavy}` }}
          className="mb-12"
        />

        {/* Footer nav */}
        <div className="flex justify-between items-center text-sm flex-wrap gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-medium"
            style={{ color: C.lightSlate }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to portfolio
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="https://much-auth-my-app.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium"
              style={{ color: C.lightSlate }}
            >
              Live demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
            <a
              href="https://github.com/akinsikuoluwafemi/much-auth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium"
              style={{ color: C.teal }}
            >
              View source on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
