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

  let listOffExperiance = [
    //********* Culture - Objects **********//
  new Experience (1,'Culture','Museum','./assets/experiences/1.vasa.jpg','Heldag på Vasa Museet','Decription', 100),
  new Experience(2,'Culture','Museum','./assets/experiences/2.abba.jpg','Heldag på ABBA Museet','Decription',149),
  new Experience (3,'Culture','Museum','./assets/experiences/3.moderna.jpg','Heldag på Moderna Museet','Description', 100),
  new Experience (4,'Culture','Theater','./assets/experiences/4.dramaten.jpg','Föreställning på Dramaten','Description',400),
  new Experience (5,'Culture','Theater','./assets/experiences/5.oscarsteatern.jpg','Föreställning på OscarsTeater','Decription',350),
  new Experience (6,'Culture','Theater','./assets/experiences/6.operan.jpg','Opera på kungliga Operan','Description',600),
  new Experience (7,'Culture','Music','./assets/experiences/7.zaralarsson.jpg','Zara Larsson i Globen','Description',600),
  new Experience (8,'Culture','Music','./assets/experiences/8.allsang.jpg','Allsång på skansen','Description',200),
  new Experience (9,'Culture','Music','./assets/experiences/9.agnescarlsson.jpg','Agnes Carlsson på Tele 2 arenan','Description',350),

  //********* Food Experiances - Objects **********// 
  new Experience (10,'Food Experiences','Dinner','./assets/experiences/10.indiskmat.jpg','Indisk trerätters middag inkl. ett glas öl eller vin','Description',450),
  new Experience (11,'Food Experiences','Dinner','./assets/experiences/11.grandhotelmat.jpg','3-rätters middag för 2 pers på Grand Hotel','Description', 1100),
  new Experience (12,'Food Experiences','Dinner','./assets/experiences/.12.thai.jpg','Thailändsk trerätters','Description',500),
  new Experience (13,'Food Experiences','Afternoon tea','./assets/experiences/13.afternoonhamilton.jpg','Afternoon tea för två pers - Hamilton Hotel','Description',450),
  new Experience (14,'Food Experiences','Afternoon tea','./assets/experiences/14.afternoondiplomat.jpg','Afternoon tea för fyra pers - Grand hotel','Description',500),
  new Experience (15,'Food Experiences','Afternoon tea','./assets/experiences/15.afternoonsvenskttenn.jpg','Afternoon tea för två pers - Svenskt Tenn','Description',500),
  new Experience (16,'Food Experiences','Alcohol','./assets/experiences/16.olprovning.jpg','Ölprovning','Description',1800),
  new Experience (17,'Food Experiences','Alcohol','./assets/experiences/17.vinost.jpg','Exklusiv Vin och ost provning','Description',1900),
  new Experience (18,'Food Experiences','Alcohol','./assets/experiences/18.champagne.jpg','Champange Provning','Description',950),

  //********* Adventure - Objects **********// 
  new Experience (19,'Adventure','Outside','./assets/experiences/19.aventyrsbana.jpg','Äventyrsbana','Description',2000),
  new Experience (20,'Adventure','Outside','./assets/experiences/20.skargard.jpg','Skärgårdstur med middag','Description',1000),
  new Experience (21,'Adventure','Outside','./assets/experiences/21.takvandring.jpg','Vandring på tak','Description',4000),
  new Experience (22,'Adventure','indoor','./assets/experiences/22.weekend.jpg','Hotel weekend för två','Description',1500),
  new Experience (23,'Adventure','indoor','./assets/experiences/23.padel.jpg','Padel','Description',250),
  new Experience (24,'Adventure','indoor','./assets/experiences/24.biomiddag.jpg','Bio med middag för två','Description',700),
  new Experience (25,'Adventure','Family','./assets/experiences/25.fjarilshuset.jpg','Fjärilshuset','Description',150),
  new Experience (26,'Adventure','Family','./assets/experiences/26.gronalund.jpg','Grönalund inc åkband & entre för 4 pers'),
  new Experience (27,'Adventure','Family','./assets/experiences/27.luftballong.jpg','Flyga luftballong','Description',1000),

  //********* Wellness - Objects **********// 
  new Experience (28,'Wellness','Facial','./assets/experiences/28.antiaging.jpg','Anti aging ansiktsbehandling 60 min','Description',800),
  new Experience (29,'Wellness','Facial','./assets/experiences/29.ansiktbehandling.jpg','Klassisk ansiksbehandling 45min','Description',500),
  new Experience (30,'Wellness','Facial','./assets/experiences/30.lyxbehandling.jpg','Lyx ansiksbehandling 90min','Description',1500),
  new Experience (31,'Wellness','Massage','./assets/experiences/31.yasuragi.jpg','Heldag på Yasuragi + 1h massage för 2','Description',1000),
  new Experience (32,'Wellness','Massage','./assets/experiences/32.algmassage.jpg','Alginpackning inkl massage 30 min - Sparadiset','Description',500),
  new Experience (33,'Wellness','Massage','./assets/experiences/33.gravidmassage.jpg','Gravidmassage - Sturebadet','Description',550),
  new Experience (34,'Wellness','Relaxation','./assets/experiences/24.yogayama.png','Klippkort 5 ggr - Yogayama Östermalm','Description',2000),
  new Experience (35,'Wellness','Relaxation','./assets/experiences/35.meditation.jpg','Klippkort 5 ggr - Kadampa meditationscenter Stockholm','Description',2000),
  new Experience (36,'Wellness','Relaxation','./assets/experiences/36.qigong.jpg','Qihealing på Qigongcenter Stockholm','Description',500),
];