import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import VideoBackground from './components/VideoBackground/VideoBackground.jsx';
import MobileMenu from './components/MobileMenu/MobileMenu.jsx';

const App = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <div>
         <div className={`main-content ${isMenuOpen ? 'dimmed' : ''}`}>
            <div id='black-overlay' style={{ display: isMenuOpen ? 'block' : 'none' }} onClick={toggleMenu}></div>
            <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <VideoBackground />
            <h1 style={{ color: 'white', width: '88.72%', marginTop: '95px', fontWeight: '600', fontSize: '2.8rem' }} className='mx-auto'>your home, your future <br />our expertise</h1>
            <p>
               Cupidatat est occaecat minim est sunt commodo aliqua. Excepteur veniam reprehenderit aliquip aliquip incididunt fugiat dolore eu nulla nostrud laborum pariatur id. Aliqua deserunt est laboris veniam duis aliqua. Sint ut nisi anim do do consectetur officia cillum aliquip duis cillum mollit dolor. Fugiat quis reprehenderit dolore irure est ea ut reprehenderit magna Lorem.

               Nostrud aute aute mollit dolore nulla. Ex laboris exercitation sit nisi occaecat voluptate minim id velit nostrud. Adipisicing esse quis mollit laborum qui. Consequat elit aute voluptate tempor incididunt aliqua amet pariatur.

               Occaecat ipsum voluptate labore officia et velit voluptate in amet mollit. Cupidatat esse ullamco officia pariatur. Nulla Lorem consectetur aute nisi ea veniam mollit aliquip et sit est. Labore cupidatat excepteur magna est quis do nostrud eiusmod exercitation eu dolore magna. Ex duis magna aute ut enim ullamco enim veniam voluptate nostrud duis nulla.

               Proident fugiat qui officia tempor ad amet qui exercitation cillum exercitation exercitation. Mollit do enim minim laboris non culpa deserunt dolor adipisicing. Adipisicing ut commodo qui do dolor minim laborum exercitation. Nostrud occaecat deserunt anim dolor culpa Lorem id amet aute culpa non laboris ex. Aute cupidatat non do tempor velit amet tempor Lorem esse incididunt consequat voluptate eu. Velit reprehenderit sunt ex laboris sit sunt elit ad minim aliquip deserunt. Ipsum ex labore aliqua sunt.

               Duis ipsum proident velit esse deserunt cupidatat. Nostrud cillum pariatur proident nisi quis ex magna magna voluptate ex sint. Deserunt culpa reprehenderit aliqua esse adipisicing non velit nulla mollit nisi cupidatat. Dolore voluptate ipsum quis quis. Amet qui voluptate ex excepteur ea commodo id ut anim culpa ipsum Lorem. Exercitation eiusmod esse et ullamco quis sit laboris labore mollit cillum velit. Commodo eiusmod dolore pariatur sunt ea aliqua enim ut qui aliqua do incididunt nulla.

               Sunt culpa laborum deserunt sunt velit culpa quis elit sit exercitation. Quis reprehenderit laborum quis magna id consectetur nostrud. Aute velit occaecat veniam eu aliquip duis nisi commodo ex anim exercitation adipisicing qui. Lorem et tempor velit commodo fugiat consectetur reprehenderit consectetur incididunt officia. Quis ea quis mollit cupidatat sit qui fugiat. Occaecat labore nostrud aliqua veniam proident adipisicing elit non est deserunt. Non irure reprehenderit est do.

               Commodo enim eu est laborum reprehenderit est sit non eiusmod do eiusmod amet est. Est duis nostrud nulla do dolore pariatur sint nisi cillum occaecat. Consequat amet cillum proident in officia non commodo ad consequat do nostrud. Ullamco tempor officia ut dolore ipsum id do veniam adipisicing anim consectetur consequat laborum ut.

               Irure amet ad velit mollit cupidatat culpa non ex reprehenderit est nisi. Enim dolore dolor adipisicing do magna reprehenderit enim. Consequat magna in dolor id ipsum reprehenderit in qui eiusmod ea elit. Sint est pariatur fugiat ex duis enim fugiat anim enim aute. Irure ad et nulla labore anim eiusmod. Nulla anim id adipisicing nisi proident labore Lorem qui aute sint.

               Enim Lorem nostrud ea ut veniam sit laboris cupidatat sit enim dolor. Fugiat aute qui pariatur incididunt ipsum commodo dolore ex excepteur quis. Officia pariatur labore reprehenderit aliqua enim enim cupidatat consequat duis. Dolor ea irure culpa sit magna tempor amet in commodo culpa consequat est enim ea.

               Amet sint velit esse nulla occaecat amet adipisicing ad officia consequat duis ut. Voluptate pariatur qui esse veniam sunt nisi cillum voluptate. Occaecat eiusmod cillum aliqua sunt. Laborum exercitation velit duis anim Lorem commodo amet aute Lorem fugiat nulla exercitation. Voluptate id nulla sunt cillum consectetur fugiat.


               Cupidatat est occaecat minim est sunt commodo aliqua. Excepteur veniam reprehenderit aliquip aliquip incididunt fugiat dolore eu nulla nostrud laborum pariatur id. Aliqua deserunt est laboris veniam duis aliqua. Sint ut nisi anim do do consectetur officia cillum aliquip duis cillum mollit dolor. Fugiat quis reprehenderit dolore irure est ea ut reprehenderit magna Lorem.

               Nostrud aute aute mollit dolore nulla. Ex laboris exercitation sit nisi occaecat voluptate minim id velit nostrud. Adipisicing esse quis mollit laborum qui. Consequat elit aute voluptate tempor incididunt aliqua amet pariatur.

               Occaecat ipsum voluptate labore officia et velit voluptate in amet mollit. Cupidatat esse ullamco officia pariatur. Nulla Lorem consectetur aute nisi ea veniam mollit aliquip et sit est. Labore cupidatat excepteur magna est quis do nostrud eiusmod exercitation eu dolore magna. Ex duis magna aute ut enim ullamco enim veniam voluptate nostrud duis nulla.

               Proident fugiat qui officia tempor ad amet qui exercitation cillum exercitation exercitation. Mollit do enim minim laboris non culpa deserunt dolor adipisicing. Adipisicing ut commodo qui do dolor minim laborum exercitation. Nostrud occaecat deserunt anim dolor culpa Lorem id amet aute culpa non laboris ex. Aute cupidatat non do tempor velit amet tempor Lorem esse incididunt consequat voluptate eu. Velit reprehenderit sunt ex laboris sit sunt elit ad minim aliquip deserunt. Ipsum ex labore aliqua sunt.

               Duis ipsum proident velit esse deserunt cupidatat. Nostrud cillum pariatur proident nisi quis ex magna magna voluptate ex sint. Deserunt culpa reprehenderit aliqua esse adipisicing non velit nulla mollit nisi cupidatat. Dolore voluptate ipsum quis quis. Amet qui voluptate ex excepteur ea commodo id ut anim culpa ipsum Lorem. Exercitation eiusmod esse et ullamco quis sit laboris labore mollit cillum velit. Commodo eiusmod dolore pariatur sunt ea aliqua enim ut qui aliqua do incididunt nulla.

               Sunt culpa laborum deserunt sunt velit culpa quis elit sit exercitation. Quis reprehenderit laborum quis magna id consectetur nostrud. Aute velit occaecat veniam eu aliquip duis nisi commodo ex anim exercitation adipisicing qui. Lorem et tempor velit commodo fugiat consectetur reprehenderit consectetur incididunt officia. Quis ea quis mollit cupidatat sit qui fugiat. Occaecat labore nostrud aliqua veniam proident adipisicing elit non est deserunt. Non irure reprehenderit est do.

               Commodo enim eu est laborum reprehenderit est sit non eiusmod do eiusmod amet est. Est duis nostrud nulla do dolore pariatur sint nisi cillum occaecat. Consequat amet cillum proident in officia non commodo ad consequat do nostrud. Ullamco tempor officia ut dolore ipsum id do veniam adipisicing anim consectetur consequat laborum ut.

               Irure amet ad velit mollit cupidatat culpa non ex reprehenderit est nisi. Enim dolore dolor adipisicing do magna reprehenderit enim. Consequat magna in dolor id ipsum reprehenderit in qui eiusmod ea elit. Sint est pariatur fugiat ex duis enim fugiat anim enim aute. Irure ad et nulla labore anim eiusmod. Nulla anim id adipisicing nisi proident labore Lorem qui aute sint.

               Enim Lorem nostrud ea ut veniam sit laboris cupidatat sit enim dolor. Fugiat aute qui pariatur incididunt ipsum commodo dolore ex excepteur quis. Officia pariatur labore reprehenderit aliqua enim enim cupidatat consequat duis. Dolor ea irure culpa sit magna tempor amet in commodo culpa consequat est enim ea.

               Amet sint velit esse nulla occaecat amet adipisicing ad officia consequat duis ut. Voluptate pariatur qui esse veniam sunt nisi cillum voluptate. Occaecat eiusmod cillum aliqua sunt. Laborum exercitation velit duis anim Lorem commodo amet aute Lorem fugiat nulla exercitation. Voluptate id nulla sunt cillum consectetur fugiat.

               Cupidatat est occaecat minim est sunt commodo aliqua. Excepteur veniam reprehenderit aliquip aliquip incididunt fugiat dolore eu nulla nostrud laborum pariatur id. Aliqua deserunt est laboris veniam duis aliqua. Sint ut nisi anim do do consectetur officia cillum aliquip duis cillum mollit dolor. Fugiat quis reprehenderit dolore irure est ea ut reprehenderit magna Lorem.

               Nostrud aute aute mollit dolore nulla. Ex laboris exercitation sit nisi occaecat voluptate minim id velit nostrud. Adipisicing esse quis mollit laborum qui. Consequat elit aute voluptate tempor incididunt aliqua amet pariatur.

               Occaecat ipsum voluptate labore officia et velit voluptate in amet mollit. Cupidatat esse ullamco officia pariatur. Nulla Lorem consectetur aute nisi ea veniam mollit aliquip et sit est. Labore cupidatat excepteur magna est quis do nostrud eiusmod exercitation eu dolore magna. Ex duis magna aute ut enim ullamco enim veniam voluptate nostrud duis nulla.

               Proident fugiat qui officia tempor ad amet qui exercitation cillum exercitation exercitation. Mollit do enim minim laboris non culpa deserunt dolor adipisicing. Adipisicing ut commodo qui do dolor minim laborum exercitation. Nostrud occaecat deserunt anim dolor culpa Lorem id amet aute culpa non laboris ex. Aute cupidatat non do tempor velit amet tempor Lorem esse incididunt consequat voluptate eu. Velit reprehenderit sunt ex laboris sit sunt elit ad minim aliquip deserunt. Ipsum ex labore aliqua sunt.

               Duis ipsum proident velit esse deserunt cupidatat. Nostrud cillum pariatur proident nisi quis ex magna magna voluptate ex sint. Deserunt culpa reprehenderit aliqua esse adipisicing non velit nulla mollit nisi cupidatat. Dolore voluptate ipsum quis quis. Amet qui voluptate ex excepteur ea commodo id ut anim culpa ipsum Lorem. Exercitation eiusmod esse et ullamco quis sit laboris labore mollit cillum velit. Commodo eiusmod dolore pariatur sunt ea aliqua enim ut qui aliqua do incididunt nulla.

               Sunt culpa laborum deserunt sunt velit culpa quis elit sit exercitation. Quis reprehenderit laborum quis magna id consectetur nostrud. Aute velit occaecat veniam eu aliquip duis nisi commodo ex anim exercitation adipisicing qui. Lorem et tempor velit commodo fugiat consectetur reprehenderit consectetur incididunt officia. Quis ea quis mollit cupidatat sit qui fugiat. Occaecat labore nostrud aliqua veniam proident adipisicing elit non est deserunt. Non irure reprehenderit est do.

               Commodo enim eu est laborum reprehenderit est sit non eiusmod do eiusmod amet est. Est duis nostrud nulla do dolore pariatur sint nisi cillum occaecat. Consequat amet cillum proident in officia non commodo ad consequat do nostrud. Ullamco tempor officia ut dolore ipsum id do veniam adipisicing anim consectetur consequat laborum ut.

               Irure amet ad velit mollit cupidatat culpa non ex reprehenderit est nisi. Enim dolore dolor adipisicing do magna reprehenderit enim. Consequat magna in dolor id ipsum reprehenderit in qui eiusmod ea elit. Sint est pariatur fugiat ex duis enim fugiat anim enim aute. Irure ad et nulla labore anim eiusmod. Nulla anim id adipisicing nisi proident labore Lorem qui aute sint.

               Enim Lorem nostrud ea ut veniam sit laboris cupidatat sit enim dolor. Fugiat aute qui pariatur incididunt ipsum commodo dolore ex excepteur quis. Officia pariatur labore reprehenderit aliqua enim enim cupidatat consequat duis. Dolor ea irure culpa sit magna tempor amet in commodo culpa consequat est enim ea.

               Amet sint velit esse nulla occaecat amet adipisicing ad officia consequat duis ut. Voluptate pariatur qui esse veniam sunt nisi cillum voluptate. Occaecat eiusmod cillum aliqua sunt. Laborum exercitation velit duis anim Lorem commodo amet aute Lorem fugiat nulla exercitation. Voluptate id nulla sunt cillum consectetur fugiat.

               Cupidatat est occaecat minim est sunt commodo aliqua. Excepteur veniam reprehenderit aliquip aliquip incididunt fugiat dolore eu nulla nostrud laborum pariatur id. Aliqua deserunt est laboris veniam duis aliqua. Sint ut nisi anim do do consectetur officia cillum aliquip duis cillum mollit dolor. Fugiat quis reprehenderit dolore irure est ea ut reprehenderit magna Lorem.

               Nostrud aute aute mollit dolore nulla. Ex laboris exercitation sit nisi occaecat voluptate minim id velit nostrud. Adipisicing esse quis mollit laborum qui. Consequat elit aute voluptate tempor incididunt aliqua amet pariatur.

               Occaecat ipsum voluptate labore officia et velit voluptate in amet mollit. Cupidatat esse ullamco officia pariatur. Nulla Lorem consectetur aute nisi ea veniam mollit aliquip et sit est. Labore cupidatat excepteur magna est quis do nostrud eiusmod exercitation eu dolore magna. Ex duis magna aute ut enim ullamco enim veniam voluptate nostrud duis nulla.

               Proident fugiat qui officia tempor ad amet qui exercitation cillum exercitation exercitation. Mollit do enim minim laboris non culpa deserunt dolor adipisicing. Adipisicing ut commodo qui do dolor minim laborum exercitation. Nostrud occaecat deserunt anim dolor culpa Lorem id amet aute culpa non laboris ex. Aute cupidatat non do tempor velit amet tempor Lorem esse incididunt consequat voluptate eu. Velit reprehenderit sunt ex laboris sit sunt elit ad minim aliquip deserunt. Ipsum ex labore aliqua sunt.

               Duis ipsum proident velit esse deserunt cupidatat. Nostrud cillum pariatur proident nisi quis ex magna magna voluptate ex sint. Deserunt culpa reprehenderit aliqua esse adipisicing non velit nulla mollit nisi cupidatat. Dolore voluptate ipsum quis quis. Amet qui voluptate ex excepteur ea commodo id ut anim culpa ipsum Lorem. Exercitation eiusmod esse et ullamco quis sit laboris labore mollit cillum velit. Commodo eiusmod dolore pariatur sunt ea aliqua enim ut qui aliqua do incididunt nulla.

               Sunt culpa laborum deserunt sunt velit culpa quis elit sit exercitation. Quis reprehenderit laborum quis magna id consectetur nostrud. Aute velit occaecat veniam eu aliquip duis nisi commodo ex anim exercitation adipisicing qui. Lorem et tempor velit commodo fugiat consectetur reprehenderit consectetur incididunt officia. Quis ea quis mollit cupidatat sit qui fugiat. Occaecat labore nostrud aliqua veniam proident adipisicing elit non est deserunt. Non irure reprehenderit est do.

               Commodo enim eu est laborum reprehenderit est sit non eiusmod do eiusmod amet est. Est duis nostrud nulla do dolore pariatur sint nisi cillum occaecat. Consequat amet cillum proident in officia non commodo ad consequat do nostrud. Ullamco tempor officia ut dolore ipsum id do veniam adipisicing anim consectetur consequat laborum ut.

               Irure amet ad velit mollit cupidatat culpa non ex reprehenderit est nisi. Enim dolore dolor adipisicing do magna reprehenderit enim. Consequat magna in dolor id ipsum reprehenderit in qui eiusmod ea elit. Sint est pariatur fugiat ex duis enim fugiat anim enim aute. Irure ad et nulla labore anim eiusmod. Nulla anim id adipisicing nisi proident labore Lorem qui aute sint.

               Enim Lorem nostrud ea ut veniam sit laboris cupidatat sit enim dolor. Fugiat aute qui pariatur incididunt ipsum commodo dolore ex excepteur quis. Officia pariatur labore reprehenderit aliqua enim enim cupidatat consequat duis. Dolor ea irure culpa sit magna tempor amet in commodo culpa consequat est enim ea.

               Amet sint velit esse nulla occaecat amet adipisicing ad officia consequat duis ut. Voluptate pariatur qui esse veniam sunt nisi cillum voluptate. Occaecat eiusmod cillum aliqua sunt. Laborum exercitation velit duis anim Lorem commodo amet aute Lorem fugiat nulla exercitation. Voluptate id nulla sunt cillum consectetur fugiat.

               Cupidatat est occaecat minim est sunt commodo aliqua. Excepteur veniam reprehenderit aliquip aliquip incididunt fugiat dolore eu nulla nostrud laborum pariatur id. Aliqua deserunt est laboris veniam duis aliqua. Sint ut nisi anim do do consectetur officia cillum aliquip duis cillum mollit dolor. Fugiat quis reprehenderit dolore irure est ea ut reprehenderit magna Lorem.

               Nostrud aute aute mollit dolore nulla. Ex laboris exercitation sit nisi occaecat voluptate minim id velit nostrud. Adipisicing esse quis mollit laborum qui. Consequat elit aute voluptate tempor incididunt aliqua amet pariatur.

               Occaecat ipsum voluptate labore officia et velit voluptate in amet mollit. Cupidatat esse ullamco officia pariatur. Nulla Lorem consectetur aute nisi ea veniam mollit aliquip et sit est. Labore cupidatat excepteur magna est quis do nostrud eiusmod exercitation eu dolore magna. Ex duis magna aute ut enim ullamco enim veniam voluptate nostrud duis nulla.

               Proident fugiat qui officia tempor ad amet qui exercitation cillum exercitation exercitation. Mollit do enim minim laboris non culpa deserunt dolor adipisicing. Adipisicing ut commodo qui do dolor minim laborum exercitation. Nostrud occaecat deserunt anim dolor culpa Lorem id amet aute culpa non laboris ex. Aute cupidatat non do tempor velit amet tempor Lorem esse incididunt consequat voluptate eu. Velit reprehenderit sunt ex laboris sit sunt elit ad minim aliquip deserunt. Ipsum ex labore aliqua sunt.

               Duis ipsum proident velit esse deserunt cupidatat. Nostrud cillum pariatur proident nisi quis ex magna magna voluptate ex sint. Deserunt culpa reprehenderit aliqua esse adipisicing non velit nulla mollit nisi cupidatat. Dolore voluptate ipsum quis quis. Amet qui voluptate ex excepteur ea commodo id ut anim culpa ipsum Lorem. Exercitation eiusmod esse et ullamco quis sit laboris labore mollit cillum velit. Commodo eiusmod dolore pariatur sunt ea aliqua enim ut qui aliqua do incididunt nulla.

               Sunt culpa laborum deserunt sunt velit culpa quis elit sit exercitation. Quis reprehenderit laborum quis magna id consectetur nostrud. Aute velit occaecat veniam eu aliquip duis nisi commodo ex anim exercitation adipisicing qui. Lorem et tempor velit commodo fugiat consectetur reprehenderit consectetur incididunt officia. Quis ea quis mollit cupidatat sit qui fugiat. Occaecat labore nostrud aliqua veniam proident adipisicing elit non est deserunt. Non irure reprehenderit est do.

               Commodo enim eu est laborum reprehenderit est sit non eiusmod do eiusmod amet est. Est duis nostrud nulla do dolore pariatur sint nisi cillum occaecat. Consequat amet cillum proident in officia non commodo ad consequat do nostrud. Ullamco tempor officia ut dolore ipsum id do veniam adipisicing anim consectetur consequat laborum ut.

               Irure amet ad velit mollit cupidatat culpa non ex reprehenderit est nisi. Enim dolore dolor adipisicing do magna reprehenderit enim. Consequat magna in dolor id ipsum reprehenderit in qui eiusmod ea elit. Sint est pariatur fugiat ex duis enim fugiat anim enim aute. Irure ad et nulla labore anim eiusmod. Nulla anim id adipisicing nisi proident labore Lorem qui aute sint.

               Enim Lorem nostrud ea ut veniam sit laboris cupidatat sit enim dolor. Fugiat aute qui pariatur incididunt ipsum commodo dolore ex excepteur quis. Officia pariatur labore reprehenderit aliqua enim enim cupidatat consequat duis. Dolor ea irure culpa sit magna tempor amet in commodo culpa consequat est enim ea.

               Amet sint velit esse nulla occaecat amet adipisicing ad officia consequat duis ut. Voluptate pariatur qui esse veniam sunt nisi cillum voluptate. Occaecat eiusmod cillum aliqua sunt. Laborum exercitation velit duis anim Lorem commodo amet aute Lorem fugiat nulla exercitation. Voluptate id nulla sunt cillum consectetur fugiat.

               Cupidatat est occaecat minim est sunt commodo aliqua. Excepteur veniam reprehenderit aliquip aliquip incididunt fugiat dolore eu nulla nostrud laborum pariatur id. Aliqua deserunt est laboris veniam duis aliqua. Sint ut nisi anim do do consectetur officia cillum aliquip duis cillum mollit dolor. Fugiat quis reprehenderit dolore irure est ea ut reprehenderit magna Lorem.

               Nostrud aute aute mollit dolore nulla. Ex laboris exercitation sit nisi occaecat voluptate minim id velit nostrud. Adipisicing esse quis mollit laborum qui. Consequat elit aute voluptate tempor incididunt aliqua amet pariatur.

               Occaecat ipsum voluptate labore officia et velit voluptate in amet mollit. Cupidatat esse ullamco officia pariatur. Nulla Lorem consectetur aute nisi ea veniam mollit aliquip et sit est. Labore cupidatat excepteur magna est quis do nostrud eiusmod exercitation eu dolore magna. Ex duis magna aute ut enim ullamco enim veniam voluptate nostrud duis nulla.

               Proident fugiat qui officia tempor ad amet qui exercitation cillum exercitation exercitation. Mollit do enim minim laboris non culpa deserunt dolor adipisicing. Adipisicing ut commodo qui do dolor minim laborum exercitation. Nostrud occaecat deserunt anim dolor culpa Lorem id amet aute culpa non laboris ex. Aute cupidatat non do tempor velit amet tempor Lorem esse incididunt consequat voluptate eu. Velit reprehenderit sunt ex laboris sit sunt elit ad minim aliquip deserunt. Ipsum ex labore aliqua sunt.

               Duis ipsum proident velit esse deserunt cupidatat. Nostrud cillum pariatur proident nisi quis ex magna magna voluptate ex sint. Deserunt culpa reprehenderit aliqua esse adipisicing non velit nulla mollit nisi cupidatat. Dolore voluptate ipsum quis quis. Amet qui voluptate ex excepteur ea commodo id ut anim culpa ipsum Lorem. Exercitation eiusmod esse et ullamco quis sit laboris labore mollit cillum velit. Commodo eiusmod dolore pariatur sunt ea aliqua enim ut qui aliqua do incididunt nulla.

               Sunt culpa laborum deserunt sunt velit culpa quis elit sit exercitation. Quis reprehenderit laborum quis magna id consectetur nostrud. Aute velit occaecat veniam eu aliquip duis nisi commodo ex anim exercitation adipisicing qui. Lorem et tempor velit commodo fugiat consectetur reprehenderit consectetur incididunt officia. Quis ea quis mollit cupidatat sit qui fugiat. Occaecat labore nostrud aliqua veniam proident adipisicing elit non est deserunt. Non irure reprehenderit est do.

               Commodo enim eu est laborum reprehenderit est sit non eiusmod do eiusmod amet est. Est duis nostrud nulla do dolore pariatur sint nisi cillum occaecat. Consequat amet cillum proident in officia non commodo ad consequat do nostrud. Ullamco tempor officia ut dolore ipsum id do veniam adipisicing anim consectetur consequat laborum ut.

               Irure amet ad velit mollit cupidatat culpa non ex reprehenderit est nisi. Enim dolore dolor adipisicing do magna reprehenderit enim. Consequat magna in dolor id ipsum reprehenderit in qui eiusmod ea elit. Sint est pariatur fugiat ex duis enim fugiat anim enim aute. Irure ad et nulla labore anim eiusmod. Nulla anim id adipisicing nisi proident labore Lorem qui aute sint.

               Enim Lorem nostrud ea ut veniam sit laboris cupidatat sit enim dolor. Fugiat aute qui pariatur incididunt ipsum commodo dolore ex excepteur quis. Officia pariatur labore reprehenderit aliqua enim enim cupidatat consequat duis. Dolor ea irure culpa sit magna tempor amet in commodo culpa consequat est enim ea.

               Amet sint velit esse nulla occaecat amet adipisicing ad officia consequat duis ut. Voluptate pariatur qui esse veniam sunt nisi cillum voluptate. Occaecat eiusmod cillum aliqua sunt. Laborum exercitation velit duis anim Lorem commodo amet aute Lorem fugiat nulla exercitation. Voluptate id nulla sunt cillum consectetur fugiat.
            </p>
         </div>
         <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </div>
   )
}

export default App;
