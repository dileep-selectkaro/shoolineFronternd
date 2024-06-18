import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import 'github-markdown-css'; // Optional, for styling the Markdown content

 // Path to your markdown files
import markdownContent1 from '../MarkdownFiles/Divorce.md';
import markdownContent2 from "../MarkdownFiles/Mutaldivorce.md";
import markdownContent3 from "../MarkdownFiles/Crimecyber.md";
import markdownContent4 from "../MarkdownFiles/Accountfreezing.md";
import markdownContent5 from "../MarkdownFiles/Fir.md";
import markdownContent6 from "../MarkdownFiles/Judicial.md";
import markdownContent7 from "../MarkdownFiles/Conjugal.md";
import markdownContent8 from "../MarkdownFiles/SafeguardingVictims.md";
import markdownContent9 from "../MarkdownFiles/ForeignDivorceValidity.md";
import markdownContent10 from "../MarkdownFiles/IdTheftCyberSpace.md";
import markdownContent11 from "../MarkdownFiles/WifeProfitHusbandBusiness.md";
import markdownContent12 from "../MarkdownFiles/FTCvRegularCourts.md";
import markdownContent13 from "../MarkdownFiles/AmendmentProvision.md" ;
import markdownContent14 from "../MarkdownFiles/Applicability.md" ;
import markdownContent15 from "../MarkdownFiles/Crimecyber.md" 
import markdownContent16 from "../MarkdownFiles/Cruelty.md" 
import markdownContent17 from "../MarkdownFiles/CyberCrime.md" 
import markdownContent18 from "../MarkdownFiles/DeathPenalty.md" 
import markdownContent19 from "../MarkdownFiles/Distinction.md" 
import markdownContent20 from "../MarkdownFiles/DivorceFemale.md" 
import markdownContent21 from "../MarkdownFiles/Effectiveness.md" 
import markdownContent22 from "../MarkdownFiles/Identity.md" 
import markdownContent23 from "../MarkdownFiles/Judgement.md" 
import markdownContent24 from "../MarkdownFiles/JuvenileJustice.md" 
import markdownContent25 from "../MarkdownFiles/NonJoinder.md" 
import markdownContent26 from "../MarkdownFiles/Petition.md" 
import markdownContent27 from "../MarkdownFiles/Procedure.md" 
import markdownContent28 from "../MarkdownFiles/Research.md" 
import markdownContent29 from "../MarkdownFiles/Restitution.md" 
import markdownContent30 from "../MarkdownFiles/Reversal.md" 
import markdownContent31 from "../MarkdownFiles/RightMinorities.md" 
import markdownContent32 from "../MarkdownFiles/StateArticle.md" 
import markdownContent33 from "../MarkdownFiles/TransferPetition.md" 
import markdownContent34 from "../MarkdownFiles/Validity.md" 
import markdownContent35 from "../MarkdownFiles/WifeSeek.md" 



const markdownContents = {
  '1': markdownContent1,
  '2':markdownContent2,
  '3': markdownContent3,
  '4':markdownContent4,
  '5':markdownContent5,
  '6': markdownContent6,
  '7':markdownContent7,
  '8':markdownContent8,
  '9':markdownContent9,
  '10':markdownContent10,
  '11':markdownContent11,
  '12':markdownContent12,
  '13':markdownContent13,
  '14':markdownContent14,
  '15':markdownContent15,
  '16':markdownContent16,
  '17':markdownContent17,
  '18':markdownContent18,
  '19':markdownContent19,
  '20':markdownContent20,
  '21':markdownContent21,
  '22':markdownContent22,
  '23':markdownContent23,
  '24':markdownContent24,
  '25':markdownContent25,
  '26':markdownContent26,
  '27':markdownContent27,
  '28':markdownContent28,
  '29':markdownContent29,
  '30':markdownContent30,
  '31':markdownContent31,
  '32':markdownContent32,
  '33':markdownContent33,
  '34':markdownContent34,
  '35':markdownContent35,
  


  // Add more entries here if you have more markdown files
};
function App() {
  const [content, setContent] = React.useState('');
  const { id } = useParams(); // Extract the blog ID from the URL

  React.useEffect(() => {
    // Construct the file path based on the blogId
    console.log(id);
    console.log(markdownContents[id]);
    const markdownToLoad = markdownContents[id  ] || markdownContents['2'];

    fetch(markdownToLoad)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error fetching Markdown content:', error));
  }, [id]); // Rerun effect when blogId changes

  return (
    <div className="container mt-5">
      <ReactMarkdown children={content} />
    </div>
  );
}

export default App;

