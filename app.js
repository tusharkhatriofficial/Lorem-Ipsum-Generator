
const text = [
  `I'm baby id flexitarian velit, adaptogen chicharrones veniam pariatur meditation mumblecore pug dreamcatcher. Actually forage hella, copper mug tattooed twee bitters chicharrones. PBR&B kitsch tofu single-origin coffee distillery bitters ea. Four loko craft beer irure swag, ullamco in adipisicing direct trade ugh.`,
  `Tumeric snackwave ipsum roof party. Pabst nisi eiusmod occupy. VHS cupidatat nostrud asymmetrical sriracha 90's sustainable PBR&B readymade schlitz ennui hoodie ut. Cornhole viral cred meggings hammock trust fund fugiat mlkshk tempor DSA. Deserunt kale chips banh mi, echo park deep v dreamcatcher four dollar toast excepteur esse tacos. Voluptate squid dolor everyday carry velit non. Kombucha pug fingerstache duis ipsum.`,
  `La croix tousled distillery, pork belly lorem iPhone ramps DIY raclette laborum. Marfa crucifix truffaut thundercats skateboard. Gastropub post-ironic veniam thundercats roof party et venmo butcher mumblecore. Messenger bag voluptate dolore, XOXO ipsum jean shorts tousled tumblr yuccie. Fanny pack skateboard aliquip ethical taiyaki.`,
  `Distillery pariatur ut, twee iceland swag pug next level. Hashtag meh yuccie in roof party. Bushwick ipsum raclette tofu snackwave, flexitarian raw denim disrupt nulla +1 ethical succulents. Et williamsburg aliquip, green juice gentrify officia ea chicharrones palo santo +1 tempor 8-bit ut franzen.`,
  `Pariatur shoreditch succulents tattooed 3 wolf moon kinfolk keytar art party tousled praxis waistcoat hexagon. Occaecat edison bulb typewriter waistcoat. Austin direct trade irure ad. Consectetur knausgaard glossier single-origin coffee. Kinfolk mollit quinoa salvia XOXO, jianbing kombucha lo-fi before they sold out air plant sint kickstarter tempor nulla DSA. Pinterest tonx fixie yuccie try-hard marfa. Letterpress dolor ethical dreamcatcher hot chicken crucifix, mlkshk pickled vegan seitan narwhal kinfolk keytar fingerstache.`,
  `Tumeric godard fashion axe exercitation, pariatur poutine fam gentrify incididunt migas sint kickstarter ramps. Slow-carb polaroid ut mixtape artisan. Actually aute microdosing normcore shoreditch paleo ennui. Man bun raw denim aute quinoa, mlkshk drinking vinegar YOLO literally bespoke echo park waistcoat. Vaporware dolor flannel flexitarian cronut.`,
  `Enim banh mi drinking vinegar palo santo meh, id dolore kitsch veniam master cleanse unicorn meggings biodiesel. Irony irure trust fund jean shorts tilde master cleanse vape forage. Velit pickled tote bag, nisi est officia cornhole vape readymade post-ironic lomo affogato shaman pabst. Ugh franzen pour-over in sartorial consectetur, adipisicing post-ironic gochujang consequat fixie activated charcoal. Drinking vinegar shaman polaroid pickled franzen, pariatur fugiat succulents sartorial selvage tofu poke kogi mixtape migas.`,
  `Trust fund blue bottle tattooed kale chips kombucha, pickled tempor mixtape asymmetrical magna. Lorem next level bicycle rights, letterpress post-ironic elit vinyl. Quis adipisicing 90's before they sold out fugiat. Kogi tumeric synth typewriter est keffiyeh letterpress. In plaid seitan selvage banjo.`,
  `Forage tumeric shabby chic non aliquip gastropub blue bottle chillwave culpa XOXO. Eiusmod dolor ullamco put a bird on it meggings laborum truffaut, unicorn retro viral godard dolore. Pinterest bicycle rights tumeric consectetur irure VHS, voluptate hot chicken. Migas non ad iceland lorem yuccie live-edge veniam eu.`
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

result.innerHTML = `<article class="lorem-text">${text[0]}</article>`;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var value = parseInt(amount.value);
  console.log(value);

  //empty
  //-1
  // > 9
  if(isNaN(value) || value < 0 || value > 9){
    result.innerHTML = `<article class="lorem-text">${text[0]}</article>`;
  }
  else{
    let tempText = text.slice(0, value);
    tempText = tempText.map((item) => {
        return `<article class="lorem-text">${item}</article>`;
    })
    .join("");
    result.innerHTML = tempText;

  }

});
