import { useState } from "react";
import botLogo from "./assets/bot.png";
import botintro from "./assets/bot_intro.mp4";
import translate_video from "./assets/translate-edit.mp4";
import reply_video from "./assets/reply_edit.mp4";
import delete_video from "./assets/delete.mp4"
import summarize_video from "./assets/summarize_edit.mp4";
import followup_video from "./assets/Followup.mp4";

function App() {
  const [activeVideo, setActiveVideo] = useState(botintro);

  const features = [
    {
      title: "Multilingual Translation",
      video: translate_video,
    },
    {
      title: "Thread Summarization",
      video: summarize_video,
    },
    {
      title: "Reply Draft Generation",
      video: reply_video,
    },
    {
      title: "Follow-ups + Stale Management",
      video: followup_video,
    },
    {
      title: "Auto-delete Bot Replies",
      video: delete_video,
    },
    {
      title: "And many more...",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center gap-20">
        <div className="items-center justify-center px-6 flex">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center lg:mt-3 mt-10">
            {/* BOT IMAGE */}
            <div className="flex justify-center">
              <div className="bg-[#111827] rounded-3xl p-12 shadow-xl">
                <img
                  src={botLogo}
                  alt="Yaplate Bot"
                  className="w-56 h-56 object-contain"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-6 tracking-tight">
                Yaplate Bot
              </h1>
              <p className="text-blue-400 text-lg mb-4">
                A multilingual bridge between contributors and maintainers
              </p>
              <p className="text-gray-300 leading-relaxed w-full">
                Yaplate is a GitHub App bot that helps maintainers and
                contributors communicate better by translating, summarizing, and
                generating replies inside GitHub issues and pull requests.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text font-bold lg:mb-5 mb-20">
          Want to see it in action? Scroll down
        </div>
      </section>

      {/* PROBLEM + SOLUTION SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-4 text-center">
            The Problem Yaplate Solves
          </h2>

          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Open-source collaboration breaks down when language barriers, long
            threads, and unclear tone slow down decision-making. Yaplate keeps
            GitHub conversations productive, inclusive, and easy to follow — no
            matter where contributors are from.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Problem Card */}
            <div className="bg-[#111827] rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">
                The Collaboration Problem
              </h3>

              <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-5">
                <li>
                  Contributors write in different languages, causing slower
                  reviews and misunderstandings.
                </li>
                <li>
                  Long issues and PR threads become hard to catch up on.
                </li>
                <li>
                  Maintainers waste time rewriting responses instead of shipping
                  code.
                </li>
                <li>
                  Tone can be misread across cultures, increasing friction.
                </li>
                <li>
                  Contributors feel ignored when follow-ups don’t happen.
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className="bg-[#111827] rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">
                How Yaplate Fixes It
              </h3>

              <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-5">
                <li>
                  Translates issue and PR comments into the preferred language.
                </li>
                <li>
                  Summarizes long threads so maintainers can catch up quickly.
                </li>
                <li>
                  Generates reply drafts using AI when asked.
                </li>
                <li>
                  Sends follow-up reminders and can mark threads as stale.
                </li>
                <li>
                  Greets first-time contributors to build trust.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* FEATURE BUTTONS */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => {
              const isManyMore = feature.title === "And many more...";

              return (
                <button
                  key={index}
                  onClick={() => {
                    if (!isManyMore) setActiveVideo(feature.video);
                  }}
                  disabled={isManyMore}
                  className={`px-6 py-4 rounded-xl text-left transition-all duration-200 shadow-md
                    ${
                      isManyMore
                        ? "bg-[#111827] opacity-60"
                        : "bg-[#111827] hover:bg-blue-600"
                    }
                  `}
                >
                  {feature.title}
                </button>
              );
            })}
          </div>

          {/* VIDEO */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
              <video
                key={activeVideo}
                src={activeVideo}
                controls={activeVideo !== botintro}
                autoPlay={activeVideo === botintro}
                loop={activeVideo === botintro}
                muted={activeVideo === botintro}
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMMANDS SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-4 text-center">Bot Commands</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-14">
            Mention the bot inside GitHub issues or pull requests. For translate
            and reply commands, quote the comment you want the bot to respond to.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Summarize Default */}
            <div className="bg-[#111827] rounded-2xl p-6 shadow-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-blue-400">
                  @yaplate summarize
                </h3>
                <span className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                  Summary
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Summarizes the thread into key points, decisions, and next steps
                (default: English).
              </p>
            </div>

            {/* Summarize in language */}
            <div className="bg-[#111827] rounded-2xl p-6 shadow-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-blue-400">
                  @yaplate summarize in &lt;language_code&gt;
                </h3>
                <span className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                  Summary
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Summarizes long GitHub discussions into key points, decisions,
                and next steps in your chosen language.
              </p>
            </div>

            {/* Translate */}
            <div className="bg-[#111827] rounded-2xl p-6 shadow-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-blue-400">
                  @yaplate translate this to &lt;language_code&gt;
                </h3>
                <span className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                  Translation
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Quote a comment and Yaplate will translate the quoted text into
                your preferred language while preserving formatting and
                technical context.
              </p>
            </div>

            {/* Reply */}
            <div className="bg-[#111827] rounded-2xl p-6 shadow-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-blue-400">
                  @yaplate reply this in &lt;language_code&gt;
                </h3>
                <span className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                  Reply
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Quote a comment and Yaplate will generate a professional reply
                draft in your chosen language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMATIONS SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Smart Automations
          </h2>

          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-14">
            Yaplate doesn’t just respond to commands — it can automatically
            assist conversations by greeting users, following up, preventing
            escalation, and managing stale threads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Automation 1 */}
            <div className="bg-[#111827] rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Follow-up Scheduler + Stale Management
              </h3>

              <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-5">
                <li>
                  Starts a follow-up timer when an issue is assigned or a PR is
                  opened.
                </li>
                <li>
                  Posts follow-up reminders in the author/assignee’s language.
                </li>
                <li>
                  If no progress is detected after configured follow-ups, marks
                  the thread as stale.
                </li>
                <li>
                  Special case: if the user says they need maintainer help, the
                  bot stops escalation.
                </li>
              </ul>
            </div>

            {/* Automation 2 */}
            <div className="bg-[#111827] rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Greeting + Auto-delete Replies
              </h3>

              <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-5">
                <li>
                  Greets the author/assignee on their first issue or pull
                  request.
                </li>
                <li>
                  Posts a welcome message in their language to build community.
                </li>
                <li>
                  If you delete the trigger comment, Yaplate also deletes its
                  own reply automatically.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center">
          Want to test it? Just open an Issue &nbsp;<span className="underline text-blue-400"><a href="">here</a></span>&nbsp; and see its magic!
        </div>
      </section>
      <footer className="w-full mt-24 px-6 h-5">
        <hr className="border-white/40" />
        <div className="flex items-center justify-center text-xs">
          Made by Ashutosh Kumar Tiwari and powered by Lingo.dev
        </div>
      </footer>
    </div>
  );
}

export default App;
