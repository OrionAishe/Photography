import Text from './Text.vue';

export default {
  component: Text,
  title: 'Atoms/Text',
  args:{
    text: "Teste"
  }
};

export const Title = {
    args:{
        text: "Teste",
        type: "Title"
    }
};

export const Subtitle = {
  args:{
      text: "Agency provides a full service range including technical skills, design, business understanding.",
      type: "Subtitle"
  }
};

export const SimpleText = {
  args:{
      text: "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
      type: "Text"
  }
};