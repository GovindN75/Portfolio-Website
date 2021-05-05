import PYTHON_IMG from "../../assets/img/skills/python.svg";
import HTML_IMG from "../../assets/img/skills/html-5.svg";
import CSS_IMG from "../../assets/img/skills/css3.svg";
import BOOTSTRAP_IMG from "../../assets/img/skills/bootstrap-4.svg";
import REACT_IMG from "../../assets/img/skills/react.svg";
import NODE_IMG from "../../assets/img/skills/nodejs.svg";
import EXPRESS_IMG from "../../assets/img/skills/express.svg";
import JAVASCRIPT_IMG from "../../assets/img/skills/javascript.svg";
import CPP_IMG from "../../assets/img/skills/cpp.png";
import JAVA_IMG from "../../assets/img/skills/java.svg";
import Cs_IMG from "../../assets/img/skills/Cs.svg";
import TENSORFLOW_IMG from "../../assets/img/skills/tf.svg";
import KERAS_IMG from "../../assets/img/skills/keras.svg";
import mySQL_IMG from "../../assets/img/skills/mysql.svg";
import GIT_IMG from "../../assets/img/skills/git.svg";

export const skills= {
    languages: [
        {
            name: "C++",
            img: CPP_IMG,
            img_alt: "Cpp img",
        }, 
        {
            name: "Python", 
            img: PYTHON_IMG, 
            img_alt: "Python img",
        },
        {
            name: "Java", 
            img: JAVA_IMG, 
            img_alt: "Java img",
        },
        {
            name: "C#", 
            img: Cs_IMG, 
            img_alt: "C# img",
        },
    ], 
    webdev: [
        {
            name: "React.js",
            img: REACT_IMG,
            img_alt: "React.js img",
        },
        {
            name: "Node.js", 
            img: NODE_IMG,
            img_alt: "Node.js img",
        },
        {
            name: "Express.js", 
            img: EXPRESS_IMG,
            img_alt: "Express.js img",
        },
        {
            name: "Bootstrap",
            img: BOOTSTRAP_IMG, 
            img_alt: "Bootstrap img",
        },
                {
            name: "JavaScript", 
            img: JAVASCRIPT_IMG,
            img_alt: "JavaScript img",
        },
        {
            name: "HTML5", 
            img: HTML_IMG,
            img_alt: "HTML img",
        },
        {
            name: "CSS3", 
            img: CSS_IMG, 
            img_alt: "CSS img",
        },
    ],
    misc: [
        {
          name: "mySQL",
          img: mySQL_IMG,
          img_alt: "mySQL img",
        },
        {
          name: "Tensorflow", 
          img: TENSORFLOW_IMG,
          img_alt: "Tensorflow img",
        },
        {
            name: "Keras",
            img: KERAS_IMG,
            img_alt: "Keras img",
        },
        {
          name: "Git", 
          img: GIT_IMG, 
          img_alg: "Git img",
        }
    ]
}