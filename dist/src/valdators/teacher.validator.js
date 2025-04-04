"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTeacherDto = exports.CreateTeacherDto = void 0;
const class_validator_1 = require("class-validator");
const base_user_validator_1 = require("./base-user.validator");
class CreateTeacherDto extends base_user_validator_1.User {
    Hiring_Date;
    Salary;
    Specialty;
    Image;
}
exports.CreateTeacherDto = CreateTeacherDto;
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Hiring date must be a valid date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "Hiring_Date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Salary must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateTeacherDto.prototype, "Salary", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Specialty must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "Specialty", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Image must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "Image", void 0);
class UpdateTeacherDto {
    Salary;
    Email;
    Image;
    Phone;
    password;
}
exports.UpdateTeacherDto = UpdateTeacherDto;
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Salary must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateTeacherDto.prototype, "Salary", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Image must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "Image", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Phone must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "Phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Password must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required to update your information.' }),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "password", void 0);
