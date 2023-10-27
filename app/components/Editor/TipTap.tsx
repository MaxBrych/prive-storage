import { useEditor, EditorContent } from "@tiptap/react";
import { forwardRef, useImperativeHandle } from "react";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

const MenuBar = ({ editor }: any) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200"
        }
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200"
        }
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200 mr-1"
        }
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive("paragraph")
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200 mr-1"
        }
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200 mr-1"
        }
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200 mr-1"
        }
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200 mr-1"
        }
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={
          editor.isActive("highlight")
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200 mr-1"
        }
      >
        highlight
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={
          editor.isActive({ textAlign: "left" })
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200 mr-1"
        }
      >
        left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={
          editor.isActive({ textAlign: "center" })
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200 mr-1"
        }
      >
        center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={
          editor.isActive({ textAlign: "right" })
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200 mr-1"
        }
      >
        right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={
          editor.isActive({ textAlign: "justify" })
            ? "is-active"
            : "p-1 rounded-lg bg-zinc-200 mr-1"
        }
      >
        justify
      </button>
    </>
  );
};

const Tiptap = forwardRef((props, ref) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: `
    <h3 style="text-align:left">
        Devs Just Want to Have Fun by Cyndi Lauper
      </h3>
      <p style="text-align:left">
        I come home in the morning light<br>
        My mother says, <mark>“When you gonna live your life right?”</mark><br>
        Oh mother dear we’re not the fortunate ones<br>
        And devs, they wanna have fun<br>
        Oh devs just want to have fun</p>
      <p style="text-align:left">
        The phone rings in the middle of the night<br>
        My father yells, "What you gonna do with your life?"<br>
        Oh daddy dear, you know you’re still number one<br>
        But <s>girls</s>devs, they wanna have fun<br>
        Oh devs just want to have
      </p>
      <p style="text-align:left">
        That’s all they really want<br>
        Some fun<br>
        When the working day is done<br>
        Oh devs, they wanna have fun<br>
        Oh devs just wanna have fun<br>
        (devs, they wanna, wanna have fun, devs wanna have)
      </p>
    `,
  });

  // Expose methods to the parent
  useImperativeHandle(ref, () => ({
    getHTML: () => editor?.getHTML(),
  }));

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
});

Tiptap.displayName = "Tiptap";
export default Tiptap;
