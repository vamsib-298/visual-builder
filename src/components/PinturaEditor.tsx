
import React, { useState, useEffect } from "react";
import { PinturaEditor } from "@pqina/react-pintura";
import "@pqina/pintura/pintura.css";
import {
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultShapePreprocessor,
  setPlugins,
  plugin_crop,
  plugin_finetune,
  plugin_finetune_defaults,
  plugin_filter,
  plugin_filter_defaults,
  plugin_annotate,
  markup_editor_defaults,
} from "@pqina/pintura";
import {
  LocaleCore,
  LocaleCrop,
  LocaleFinetune,
  LocaleFilter,
  LocaleAnnotate,
  LocaleMarkupEditor,
} from "@pqina/pintura/locale/en_GB";

setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

const editorDefaults = {
  utils: ["crop", "finetune", "filter", "annotate","decorate",],
  imageReader: createDefaultImageReader(),
  imageWriter: createDefaultImageWriter(),
  shapePreprocessor: createDefaultShapePreprocessor(),
  ...plugin_finetune_defaults,
  ...plugin_filter_defaults,
  ...markup_editor_defaults,
  locale: {
    ...LocaleCore,
    ...LocaleCrop,
    ...LocaleFinetune,
    ...LocaleFilter,
    ...LocaleAnnotate,
    ...LocaleMarkupEditor,
  },
};

interface ExampleProps {
  selectedImage: string | null;
}

const Example: React.FC<ExampleProps> = ({ selectedImage }) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    setImage(selectedImage || null);
  }, [selectedImage]);

  return (
    <PinturaEditor
      {...editorDefaults}
      src={image || undefined} 
      className="editor"
    />
  );
};

export default Example;
