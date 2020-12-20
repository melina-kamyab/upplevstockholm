class Experience {
  constructor(Id, Category, Subcategory, Image, Title, Description, Price) {
    this.Id = Id;
    this.Category = Category;
    this.Subcategory = Subcategory;
    this.Image = Image;
    this.Title = Title;
    this.Description = Description;
    this.Price = Price;
  }
 }
  
 let listOfExperience = [
  //********* Culture - Objects **********//
  new Experience(1,"Culture","Museum","./assets/experiences/1.vasa.jpeg","Heldag på Vasa Museet","Vasamuseet är det mest besökta museet i Skandinavien där ni kan titta på världens mest bevarade 1600-talsskepp.",100),
  new Experience(2,"Culture","Museum","./assets/experiences/2.abba.jpeg","Heldag på ABBA Museet","Abbamuseet är en permanent utställning om den svenska musikgruppen Abba belägen i kvarteret Konsthallen på Djurgården.",149),
  new Experience(3,"Culture","Museum","./assets/experiences/3.moderna.jpeg","Heldag på Moderna Museet","Moderna Museet är ett museum för svensk, nordisk och internationell modern och samtida konst.",100),
  new Experience(4,"Culture","Theater","./assets/experiences/4.dramaten.jpeg","Föreställning på Dramaten","Val av föreställning görs via Dramaten, för aktuella förställningar besök dramaten.se.",400),
  new Experience(5,"Culture","Theater","./assets/experiences/5.oscarsteatern.jpeg","Föreställning på Oscarsteatern","Val av föreställning görs via Oscarsteatern, för aktuella förställningar besök oscarsteatern.se",350),
  new Experience(6,"Culture","Theater","./assets/experiences/6.operan.jpeg","Opera på kungliga Operan","Val av föreställning görs via Kungliga Operan, för aktuella förställningar besök operan.se.",600),
  new Experience(7,"Culture","Music","./assets/experiences/7.zaralarsson.jpeg","Zara Larsson i Globen","Zara Larsson, född 1997, är en svensk sångerska som blev känd efter vinsten i TV4:s tv-program Talang år 2008.",600),
  new Experience(8,"Culture","Music","./assets/experiences/8.allsang.jpeg","Allsång på skansen","Allsång på Skansen är ett allsångsprogram direktsänt från Sollidenscenen på Skansen. Allsång på Skansen sändes för första gången i SVT den 3 augusti 1979.",200),
  new Experience(9,"Culture","Music","./assets/experiences/9.agnescarlsson.jpeg","Agnes Carlsson på Tele 2 arenan","Agnes Carlsson, 31, slog igenom i ”Idol” där hon tog hem hela baletten.",350),
  
  //********* Food Experiances - Objects **********//
  new Experience(10,"Food Experiences","Dinner","./assets/experiences/10.indiskmat.jpeg","Indisk trerätters middag inkl. ett glas öl/vin","Behöver du lite hetta i vardagen? Passa på och njut av en indisk trerätters middag där ett glas öl eller vin ingår.",450),
  new Experience(11,"Food Experiences","Dinner","./assets/experiences/11.grandhotelmat.jpeg","3-rätters middag för 2 pers på Grand Hotel","Ta chansen och upplev en smakupplevelse utan dess like på Grand Hotel. Middag för två personer.",1100),
  new Experience(12,"Food Experiences","Dinner","./assets/experiences/12.thai.jpeg","Thailändsk trerätters","Upplev en exotisk kväll på Koh Phangan, en restaurang med unik inredning och fantastiska smaker.",500),
  new Experience(13,"Food Experiences","afternoon-tea","./assets/experiences/13.afternoonhamlet.jpeg","Afternoon tea för två pers - Hamilton Hotel","Klassisk Afternoon tea i romantisk miljö i gamla stan. ",450),
  new Experience(14,"Food Experiences","afternoon-tea","./assets/experiences/14.afternoondiplomat.jpeg","Afternoon tea för fyra pers - Grand hotel","Pampig Afternoon tea i klassisk stil på Grand Hotel.",500),
  new Experience(15,"Food Experiences","afternoon-tea","./assets/experiences/15.afternoonsvenkttenn.jpeg","Afternoon tea för två pers - Svenskt Tenn","Njut av Afternoon tea på Svenskt Tenns tesalong med ett glas champagne.",500),
  new Experience(16,"Food Experiences","Alcohol","./assets/experiences/16.olprovning.jpeg","Ölprovning","Den här upplevelsen är en provning och hyllning till denna uråldriga dryck som lär oss om dess historia samt om ljusa och mörka öl.",1800),
  new Experience(17,"Food Experiences","Alcohol","./assets/experiences/17.vinost.jpeg","Exklusiv Vin och ost provning","I gemytlig miljö med trevlig föreläsare får ni en intressant och lärorik kväll i ostarnas och vinets underbara värld.",1900),
  new Experience(18,"Food Experiences","Alcohol","./assets/experiences/18.champagne.jpeg","Champange Provning","Med hjälp av en kunnig sommelier får du nu hjälp med att reda ut alla begreppen och lära dig vad som kännetecknar de olika sorterna.",950),
  
  //********* Adventure - Objects **********//
  new Experience(19,"adventure","outdoors","./assets/experiences/19.aventyrsbana.jpeg","Äventyrsbana","Ta med kompisarna på en oförglömlig upplevelse. Utmana er själva uppe i trädtopparna, en rolig och spännande utmaning som garanterat tar er utanför komfortzonen!",2000),
  new Experience(20,"adventure","outdoors","./assets/experiences/20.skargard.jpeg","Skärgårdstur med middag","Njut av god mat och vackra omgivningar ombord på en middagskryssning i Stockholms skärgård.",1000),
  new Experience(21,"adventure","outdoors","./assets/experiences/21.takvandring.jpeg","Takvandring","Välkommen till originalbanan i Stockholm, öppnad 2007. Takvandring är en spännande, guidad tur över Stockholm. 43 meter upp.",4000),
  new Experience(22,"adventure","indoors","./assets/experiences/22.weekend.jpeg","Hotellweekend för två","Få ett avbrott från vardagen genom att boka en hotellweekend för två.",1500),
  new Experience(23,"adventure","indoors","./assets/experiences/23.padel.jpeg","Padel","Spela padel i Frihamnen. Aktiviteten som passar alla. Spela med din familj, kollegor, grannar eller vänner.",250),
  new Experience(24,"adventure","indoors","./assets/experiences/24.biomiddag.jpeg","Bio med middag för två","En biofilm och ett restaurangbesök är en klassisk, och helt oslagbar kombination för en bra kväll.",700),
  new Experience(25,"adventure","family","./assets/experiences/25.fjarilshuset.jpeg","Fjärilshuset","På Fjärilshuset i Hagaparken kan ni året runt uppleva ett tropiskt klimat och vandra bland fjärilar.",150),
  new Experience(26,"adventure","family","./assets/experiences/26.gronalund.jpeg","Gröna lund inkl. åkband & entré för 4 pers","Bjud hela familjen på en heldag på Gröna Lund. Åkband ingår.",1200),
  new Experience(27,"adventure","family","./assets/experiences/27.luftballong.jpeg","Flyga luftballong","Ballongflygning är ett vackert och behagligt sätt att njuta av Stockholms vyer. Varmluftsballonger flyger alltid i lugnt väder, där vinden bestämmer takt och riktning.",1000),
  
  //********* Wellness - Objects **********//
  new Experience(28,"Wellness","facials","./assets/experiences/28.antiaging.jpeg","Anti aging ansiktsbehandling 60 min","Ansiktsbehandlingen som ökar cellförnyelsen och ger strålande lyster.",800),
  new Experience(29,"Wellness","facials","./assets/experiences/29.ansiktsbehandling.jpeg","Klassisk ansiksbehandling 45min","En uppfräschande behandling med lättare por-rengöring. Förbättrar och förnyar matt och livlös hy, ger näring och lyster.",500),
  new Experience(30,"Wellness","facials","./assets/experiences/30.lyxbehandling.jpeg","Lyx ansiksbehandling 90min","Behandlingen inkluderar bland annat hudanalys, exfoliering, lättare por-rengöring, upplyftande och lymfdränerande ansiktsmassage, ansiktsmask samt avslutande produkter.",1500),
  new Experience(31,"Wellness","massage","./assets/experiences/31.yasuragi.jpeg","Heldag på Yasuragi + 1h massage för 2","Yasuragi är ett spa-hotell i Stockholm – en fridfull oas i japansk anda, med varma källor utomhus, aktiviteter, behandlingar & underbar mat.",1000),
  new Experience(32,"Wellness","massage","./assets/experiences/32.algmassage.jpeg","Alginpackning inkl massage 30 min - Sparadiset","En härlig helkroppsinpackning med närande alger som har en avgiftande och utrensande effekt. Efter dusch en lätt massage med specialcreme som har slimmande effekt.",500),
  new Experience(33,"Wellness","massage","./assets/experiences/33.gravidmassage.jpeg","Gravidmassage - Sturebadet","Massage anpassad för gravida. Vi använder en speciell gravidkudde som även gör det möjligt att ligga på mage under behandlingen.",550),
  new Experience(34,"Wellness","yoga-meditation-qigong","./assets/experiences/34.yogayama.jpeg","Klippkort 5 ggr - Yogayama Östermalm","Hos Yogayama hittar du ett stort utbud av yoga för alla nivåer. För mer information gå till yogayama.se.",2000),
  new Experience(35,"Wellness","yoga-meditation-qigong","./assets/experiences/35.meditation.jpeg","Klippkort 5 ggr - Stockholm Zen Center","Stockholm Zen Center är ett zenbuddhistiskt tempel beläget på Södermalm i Stockholm. Vår verksamhet utgörs framförallt av zazen; zenmeditation. I samband med zazen ges också buddhistisk undervisning i olika former.",2000),
  new Experience(36,"Wellness","yoga-meditation-qigong","./assets/experiences/36.qigong.jpeg","Qihealing på Qigongcenter Stockholm","Qigong är meditation i rörelse. Lär dig att finna lugnet i ett intensivt liv! För dig som saknar att känna dig mer lugn i kropp och själ.",500)
 ];
  
 $(function () {
  changeCartIcon();
  createHtmlForExperiencesPage();
 });
  
 function changeCartIcon() {
  let totalAmount = 0;
  let cartItems = JSON.parse(sessionStorage.getItem("cart"));

  if (cartItems && cartItems.length !== 0) {
    $.each(cartItems, (i, cartItem) => {
      totalAmount += cartItem.amount;
    });
    $(".cart-icon").addClass("cart-items");
  }
  if (totalAmount === 0) {
    $(".cart-icon").removeClass("cart-items");
  }

  $(".cart-icon").attr("data-number-of-items", totalAmount);
}
  
 function createHtmlForExperiencesPage() {
  $.each(listOfExperience, (i, experience) => {
    let container = $("<div>")
      .addClass("item-container")
      .attr("id", experience.Id)
      .appendTo($("." + experience.Subcategory.toLowerCase()));
  
    $("<h5>").text(experience.Title).appendTo(container);
    $("<img>")
      .attr("src", experience.Image)
      .addClass("image")
      .appendTo(container);
    $("<p>").text(experience.Description).appendTo(container);
    $("<p>")
      .text(experience.Price + " kr")
      .appendTo(container);
    $("<button>")
      .attr("type", "button")
      .attr("class", "buy-btn")
      .text("Köp")
      .appendTo(container)
      .on("click", function () {
        addToCart(experience, $(this).closest("div").attr("id"));
      });
  });
 }
  
 function addToCart(experienceItem, productId) {
  let existsInCart = false;
  let cartItems = [];
  
  if (sessionStorage.getItem("cart") !== null) {
    cartItems = JSON.parse(sessionStorage.getItem("cart"));
  
    $.each(cartItems, (i, cartItem) => {
      if (cartItem.experienceItem.Id === parseInt(productId)) {
        cartItem.amount++;
        existsInCart = true;
      }
    });
  }
  
  if (existsInCart === false) {
    let newCartObject = {
      experienceItem,
      amount: 1,
    };
    cartItems.push(newCartObject);
  }
  
  sessionStorage.setItem("cart", JSON.stringify(cartItems));
  changeCartIcon();
 }
  
 
 