import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Build Your Own: React, ProseMirror, and Redux</title>
      </Head>
      <main>
        <header>
          <h1>Build Your Own: React, ProseMirror, and Redux</h1>
        </header>
        <p>
          This course was originally designed as a two-week learning sprint to
          be taken on by the Oak team at the New York Times. The goal of this
          course is to actually build minimal alternatives to each of the three
          primary frontend libraries we use in Oak, our collaborative rich text
          editor.
        </p>
        <p>
          We&apos;ll start with Redux! There&apos;s only one Redux course;
          we&apos;re going to dive right in by building our own Redux
          implementation from scratch.
        </p>
        <ol>
          <li>
            Build your own Redux -{" "}
            <Link href="/post/build-your-own-redux/">Course</Link> :{" "}
            <a
              href="https://glitch.com/edit/#!/oak-pm-react-week-build-your-own-redux"
              rel="noopener noreferrer"
            >
              Glitch
            </a>
          </li>
        </ol>
        <p>
          Next, we&apos;re going to tackle React. We have two React courses:
        </p>
        <ol>
          <li>
            React Basics - <Link href="/post/react-basics/">Course</Link> :{" "}
            <a
              href="https://glitch.com/edit/#!/oak-pm-react-week-react-basics"
              rel="noopener noreferrer"
            >
              Glitch
            </a>
          </li>
          <li>
            Build your own React -{" "}
            <a
              href="https://pomb.us/build-your-own-react/"
              rel="noopener noreferrer"
            >
              Course
            </a>{" "}
            :{" "}
            <a
              href="https://glitch.com/edit/#!/oak-pm-react-week-build-your-own-react"
              rel="noopener noreferrer"
            >
              Glitch
            </a>
          </li>
        </ol>
        <p>
          And finally, ProseMirror. Again, we have two ProseMirror courses, a
          refresher and a deep dive:
        </p>
        <ol>
          <li>
            ProseMirror Basics - <Link href="/post/prosemirror-basics/">Course</Link> :{" "}
            <a
              href="https://glitch.com/edit/#!/oak-pm-react-week-prosemirror-basics"
              rel="noopener noreferrer"
            >
              Glitch
            </a>
          </li>
          <li>
            Build your own ProseMirror View -{" "}
            <Link href="/post/build-your-own-pm-view/">Course</Link> :{" "}
            <a
              href="https://glitch.com/edit/#!/oak-pm-react-week-build-your-own-pm-view"
              rel="noopener noreferrer"
            >
              Glitch
            </a>
          </li>
        </ol>
        <h2>Why should I bother learning how to build my own...?</h2>
        <p>
          Abstraction is one of the most valuable tools in a software
          developer’s toolbelt. It is fundamental to our craft; from machine
          code to DOM APIs, software is built on a massive system of
          abstraction. But sometimes abstractions leak, or conflict. What do we
          do when we need to peel back the abstraction and truly understand
          what’s happening under the hood? How do we best understand what our
          tools actually do?
        </p>
        <p>
          The Oak team collected and developed these resources to help us
          prepare to reimagine the way we integrated React, ProseMirror, and
          Redux in our codebase. Because React and ProseMirror have different
          philosophies about DOM management, and Redux and ProseMirror have
          different philosophies about state management, it was important that
          we understood deeply how each of them actually worked in order to
          build a system that allowed them to cooperate.
        </p>
      </main>
    </>
  );
}
