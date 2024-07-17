-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema factory
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema factory
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `factory` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `factory` ;

-- -----------------------------------------------------
-- Table `factory`.`factworkers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `factory`.`factworkers` (
  `wId` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `gradel` VARCHAR(45) NOT NULL,
  `imageurl` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`wId`),
  UNIQUE INDEX `wId_UNIQUE` (`wId` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `factory`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `factory`.`product` (
  `name` VARCHAR(255) NOT NULL,
  `imageurl` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `factory`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `factory`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `passeword` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `factory`.`workshop`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `factory`.`workshop` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `classe` VARCHAR(45) NOT NULL,
  `factworkers_wId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_workshop_factworkers_idx` (`factworkers_wId` ASC) VISIBLE,
  CONSTRAINT `fk_workshop_factworkers`
    FOREIGN KEY (`factworkers_wId`)
    REFERENCES `factory`.`factworkers` (`wId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
