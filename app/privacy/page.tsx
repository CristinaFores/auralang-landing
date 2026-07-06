import type { Metadata } from "next";
import Link from "next/link";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { REPO_URL } from "@/lib/i18n/content";

export const metadata: Metadata = {
  title: "Privacy Policy — AuraLang",
  description:
    "What data the AuraLang Chrome extension accesses and how it is used. Audio is transcribed locally and never leaves your device.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-bold tracking-[-0.5px]">{title}</h2>
      {children}
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <LocaleProvider>
      <Navbar />
      <article className="mx-auto max-w-[760px] px-12 py-20">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-accent-dark">
          Privacy Policy
        </div>
        <h1 className="text-[42px] font-extrabold leading-tight tracking-[-1px]">
          Privacy Policy — AuraLang
        </h1>
        <p className="mt-4 text-sm text-ink-faint">Last updated: 2026-07-01</p>

        <p className="mt-8 text-base leading-relaxed text-ink-soft">
          AuraLang is a Chrome extension that translates the audio of your active
          browser tab in real time. This policy describes what data the extension
          accesses and how it is used.
        </p>

        <Section title="What AuraLang accesses">
          <ul className="flex list-disc flex-col gap-3 pl-5 text-base leading-relaxed text-ink-soft">
            <li>
              <strong className="font-semibold text-ink">Tab audio</strong>: when
              you click &ldquo;Start translation,&rdquo; the extension captures the
              audio stream of your active tab (
              <code className="rounded bg-panel-soft px-1 py-0.5 font-mono text-sm">
                tabCapture
              </code>{" "}
              permission) in order to transcribe and translate it. The original tab
              audio is muted while capturing.
            </li>
            <li>
              <strong className="font-semibold text-ink">Settings</strong>: your
              source/target language, interface language, and theme (dark/light) are
              stored locally via{" "}
              <code className="rounded bg-panel-soft px-1 py-0.5 font-mono text-sm">
                chrome.storage.local
              </code>
              .
            </li>
          </ul>
        </Section>

        <Section title="What AuraLang does NOT do">
          <ul className="flex list-disc flex-col gap-3 pl-5 text-base leading-relaxed text-ink-soft">
            <li>
              It does not collect personal identification data, health data,
              financial data, authentication credentials, personal communications,
              location, browsing history, or user activity (clicks, keystrokes).
            </li>
            <li>
              It does not have a backend server. There is no account, no login, no
              analytics, no telemetry.
            </li>
            <li>
              It does not sell or share user data with third parties for advertising
              or any purpose unrelated to providing the translation feature.
            </li>
          </ul>
        </Section>

        <Section title="How audio is processed">
          <ol className="flex list-decimal flex-col gap-3 pl-5 text-base leading-relaxed text-ink-soft">
            <li>
              <strong className="font-semibold text-ink">Transcription</strong>:
              audio is transcribed locally, on your own device, using a Whisper model
              (
              <code className="rounded bg-panel-soft px-1 py-0.5 font-mono text-sm">
                @huggingface/transformers
              </code>
              , ONNX Runtime WASM). The model weights (~40–150 MB depending on the
              variant) are downloaded once from Hugging Face (huggingface.co) and
              cached locally. Audio never leaves your device for transcription.
            </li>
            <li>
              <strong className="font-semibold text-ink">Translation</strong>: the
              transcribed text is sent to Google&rsquo;s public translation endpoint (
              <code className="rounded bg-panel-soft px-1 py-0.5 font-mono text-sm">
                translate.googleapis.com
              </code>
              ) solely to obtain the translated text. No other data accompanies this
              request.
            </li>
            <li>
              <strong className="font-semibold text-ink">Speech</strong>: the
              translated text is read aloud locally using the browser&rsquo;s built-in
              Web Speech API (
              <code className="rounded bg-panel-soft px-1 py-0.5 font-mono text-sm">
                speechSynthesis
              </code>
              ). This does not leave your device.
            </li>
          </ol>
        </Section>

        <Section title="Data retention">
          <p className="text-base leading-relaxed text-ink-soft">
            Nothing is stored outside your browser. Settings persist in{" "}
            <code className="rounded bg-panel-soft px-1 py-0.5 font-mono text-sm">
              chrome.storage.local
            </code>{" "}
            until you uninstall the extension or clear it manually. Audio and
            transcribed text are processed in memory and are not saved anywhere.
          </p>
        </Section>

        <Section title="Contact">
          <p className="text-base leading-relaxed text-ink-soft">
            Questions about this policy can be raised via{" "}
            <Link
              href={`${REPO_URL}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-dark underline underline-offset-2"
            >
              GitHub Issues
            </Link>
            .
          </p>
        </Section>

        <div className="mt-14 border-t border-hairline pt-8">
          <Link
            href="/"
            className="text-[15px] font-semibold text-accent-dark no-underline"
          >
            ← Back to home
          </Link>
        </div>
      </article>
      <Footer />
    </LocaleProvider>
  );
}
