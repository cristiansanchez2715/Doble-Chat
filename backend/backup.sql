-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: ChatEnVivo
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `message` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=293 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'Cristian','Primer mensaje \n'),(2,'Cristian','Hola'),(3,'Cristian','Como estan\n'),(4,'Cristian','bieny  ustedes\n'),(5,'Camilo','Como les va'),(6,'Camilo','Como les va'),(7,'Camilo','Como les va'),(8,'gilberto','hellow'),(9,'Cristian','Si se van a colar en mi chat almenos hablen'),(10,'Hellomoto','hola'),(11,'Hellomoto','hola22'),(12,'cristian','bla bla bl '),(13,'cristian','bla bla bl '),(14,'cristian','bla bla bl '),(15,'cristian','bla bla bl 2'),(16,'cristian','bla bla bl 2'),(17,'cristian','bla bla bl 3'),(18,'cristian','bla bla bl 4'),(19,'cristian','hellomoto\n'),(20,'cristian','hellomoto\n'),(21,'bla','hellomoto\n'),(22,'bla','hellomoto\n'),(23,'Pablo','hola'),(24,'Pablo','hola22'),(25,'Pablo','hola223'),(26,'Pablo','hola223'),(27,'Pablo','hola223'),(28,'Pablo','new message\n'),(29,'Pablo','new message 2\n'),(30,'Pablo','probando'),(31,'Pablo','probando chateo'),(32,'Pablo','probando chateo milisegundos'),(33,'Pablo','probando chateo milisegundos 2'),(34,'Pablo','probando chateo milisegundos 3'),(35,'gil','hellomoto'),(36,'gil','hellomoto'),(37,'gil','hellomoto 2'),(38,'gil','hellomoto 2'),(39,'gil','hellomoto 3'),(40,'gil','hellomoto 3'),(41,'gil','hellomoto 4'),(42,'gil','hellomoto 5'),(43,'gil','hellomoto 6'),(44,'gil','hellomoto 6'),(45,'gil','hellomoto 7'),(46,'gil','hellomoto 8'),(47,'gil','hellomoto'),(48,'gil','hellomoto 2'),(49,'edson','hello world'),(50,'edson','hello world 2'),(51,'edson','hello world 24'),(52,'cs','cs llega'),(53,'cs','cs llega 2'),(54,'cs','cs llega 2'),(55,'cs','cs llega 4'),(56,'cs','cs llega 4'),(57,'Cristian','Mi nombre es cristian\n'),(58,'Cristian','Mi nombre es cristian\n 2'),(59,'Cristian','Mi nombre es cristian\n 2 3'),(60,'camilo','como vas cristian'),(61,'camilo','como vas cristian'),(62,'Cristian','Mi nombre es cristian\n 2 3 4'),(63,'Camilo','Hola'),(64,'Esteban','Hola'),(65,'Esteban','Hola'),(66,'cs','hola\n'),(67,'jf','hellow'),(68,'cs','hola2'),(69,'cs','hola3'),(70,'cs','hola3'),(71,'jf','hellow'),(72,'lala','hola'),(73,'lala','hola'),(74,'lala','hola'),(75,'lala','hola'),(76,'lala','hola'),(77,'lala','hola'),(78,'lala','hola'),(79,'lala','hola'),(80,'lala','hola'),(81,'lala','hola'),(82,'lala','hola'),(83,'lala','hola'),(84,'lala','hola'),(85,'lala','hola'),(86,'lala','hola'),(87,'lala','hola'),(88,'lala','hola'),(89,'cs','hola3'),(90,'cs','hola3'),(91,'cs','hola3'),(92,'cs','hola3'),(93,'lala','hola'),(94,'lala','hola'),(95,'lala','hola'),(96,'lala','hola'),(97,'cs','hola3'),(98,'lala','hola4'),(99,'lala','hola4'),(100,'cr','hola4'),(101,'cr','hola4'),(102,'cs','hola3'),(103,'Cristian','Buen dia'),(104,'Cristian','Buen dia'),(105,'Cristian','Buen dia'),(106,'Cristian','Buen dia'),(107,'Cristian','Buen dia'),(108,'Cristian','Buen dia'),(109,'Cristian','Buen dia'),(110,'Cristian','Buen dia'),(111,'Cristian','Buen dia'),(112,'Cristian','Buen dia'),(113,'Cristian','Buen dia'),(114,'Cristian','Buen dia'),(115,'bla','hola\n'),(116,'bla','hola\n'),(117,'bla','hola\n'),(118,'bla','hola\n'),(119,'Cristian','hola'),(120,'Cristian','hola'),(121,'Cristian','hola'),(122,'Cristian','hola'),(123,'Cristian','hola'),(124,'Cristian','hola'),(125,'Cristian','hola'),(126,'Cristian','hola'),(127,'camilo','Buen dia '),(128,'camilo','Buen dia '),(129,'Cristian','Hola'),(130,'hello','Como estan'),(131,'Cristian','Hola que tal'),(132,'Cristian','Hola que tal'),(133,'Cristian','Hola que tal'),(134,'Cristian','Hola que tal'),(135,'Cristian','Hola que tal'),(136,'Cristian','Hola que tal'),(137,'Cristian','Hola que tal'),(138,'Cristian','Hola que tal'),(139,'Cristian','Hola que tal'),(140,'Cristian','Hola que tal'),(141,'hello','Como estan'),(142,'hello','Como estan'),(143,'hello','Como estan'),(144,'hello','Como estan'),(145,'andres','buenos dias '),(146,'andres','buenos dias '),(147,'andres','buenos dias '),(148,'andres','buenos dias '),(149,'andres','buenos dias '),(150,'andres','buenos dias '),(151,'andres','buenos dias '),(152,'andres','buenos dias '),(153,'andres','buenos dias '),(154,'andres','buenos dias '),(155,'andres','buenos dias '),(156,'andres','buenos dias '),(157,'andres','buenos dias '),(158,'andres','buenos dias '),(159,'andres','buenos dias '),(160,'andres','buenos dias '),(161,'hello','Como estan'),(162,'hello','Como estan'),(163,'hello','Como estan'),(164,'hello','Como estan2'),(165,'hello','Como estan2'),(166,'hello','Como estan2'),(167,'hello','Como estan2'),(168,'edilmar','como estan '),(169,'edilmar','como estan '),(170,'edilmar','como estan '),(171,'edilmar','como estan '),(172,'edilmar','como estan '),(173,'edilmar','como estan '),(174,'edilmar','como estan '),(175,'edilmar','como estan '),(176,'edilmar','como estan '),(177,'edilmar','como estan '),(178,'edilmar','como estan '),(179,'edilmar','como estan '),(180,'edilmar','como estan '),(181,'edilberto','buen dia '),(182,'edilberto','buen dia '),(183,'edilberto','buen dia '),(184,'edilberto','buen dia '),(185,'edilberto','buen dia '),(186,'andres','buenos dias 2'),(187,'andres','buenos dias 2'),(188,'h','be'),(189,'h','be'),(190,'h','be'),(191,'h','be'),(192,'h','be'),(193,'h','be'),(194,'edilberto','buen dia '),(195,'Cristian','Buenos dias '),(196,'Cristian','Buenos dias '),(197,'milo','Como estan 2'),(198,'milo','Como estan 2'),(199,'milo','Como estan 2'),(200,'milo','Como estan 2'),(201,'milo','Como estan 3'),(202,'milo','Como estan 3'),(203,'milo','Como estan 3'),(204,'milo','Como estan 3'),(205,'milo','Como estan 3'),(206,'Cristian','Buenos dias '),(207,'Cristian','Buenos dias 22'),(208,'Cristian','Buenos dias 22'),(209,'Cristian','Buenos dias 22'),(210,'milo','Como estan 3'),(211,'Milo','hello'),(212,'Andres','Hola'),(213,'Andres','Hola'),(214,'edilberto','como estan'),(215,'edilberto','como estan'),(216,'edilberto','como estan'),(217,'edilberto','como estan'),(218,'edilberto','como estan'),(219,'edilberto','como estan'),(220,'edilberto','como estan'),(221,'edilberto','como estan'),(222,'edilberto','como estan'),(223,'Andres','Hola que tal '),(224,'Andres','Hola que tal '),(225,'edilberto','como estan amigos mi nombre es edison'),(226,'edilberto','como estan amigos mi nombre es edison'),(227,'cristian','Cristian'),(228,'cristian','Cristian'),(229,'cristian','Cristian'),(230,'cristian','Cristian'),(231,'cs','Hola'),(232,'camilo','hola\n'),(233,'cristian','como esta'),(234,'cristian','como esta'),(235,'camilo','hola 2\n'),(236,'camilo','hola 3'),(237,'camilo','hola 3'),(238,'cristian','como esta 2'),(239,'cristian','como esta 2'),(240,'camilo','hola son las 9 50 pm'),(241,'cristian','que hora es'),(242,'cristian','que hora es'),(243,'camilo','hola son las 9 50 pm'),(244,'cristian','que dia es hoy'),(245,'camilo','es lunes'),(246,'Cristian','hola'),(247,'Cristian','hola'),(248,'Cristian','hola'),(249,'Cristian','hola'),(250,'Cristian','hola'),(251,'Cristian','hola'),(252,'Cristian','hola'),(253,'mono','hola'),(254,'mono','hola'),(255,'mono','hola'),(256,'mono','hola'),(257,'mono','hola'),(258,'mono','hola'),(259,'mono','hola'),(260,'mono','hola'),(261,'mono','hola'),(262,'mono','hola'),(263,'mono','hola'),(264,'mono','hola'),(265,'mono','hola'),(266,'sdf','hol'),(267,'sdf','hol'),(268,'sdf','hol'),(269,'mono','cristian'),(270,'mono','cristian 2'),(271,'mono','cristian 3'),(272,'mono','cristian 3'),(273,'mono','cristian 3'),(274,'mono','cristian 3'),(275,'mono','cristian 3'),(276,'fdvgre','vdf'),(277,'fdvgre','vdf'),(278,'fdvgre','vdf'),(279,'fdvgre','vdf'),(280,'fdvgre','vdf'),(281,'vristian','hola'),(282,'cristian','hola'),(283,'Cristian','como esta'),(284,'camilo','bien y ud '),(285,'camilo','bien y ud '),(286,'h','b bgf'),(287,'Cristian','muy bien y tu '),(288,'Cristian','muy bien y tu '),(289,'Cristian','muy bien y tu '),(290,'Cristian','muy bien y tu '),(291,'Cristian','muy bien y tu '),(292,'Cristian','muy bien y tu ');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-13 20:06:14
