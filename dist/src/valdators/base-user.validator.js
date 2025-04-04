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
exports.User = void 0;
const class_validator_1 = require("class-validator");
// Enum for Gender
var Gender;
(function (Gender) {
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["Male"] = 1] = "Male";
})(Gender || (Gender = {}));
class User {
    First_Name;
    Last_Name;
    Gender;
    Address;
    Email;
    password;
    confirmPassword;
    role;
    Phone;
}
exports.User = User;
__decorate([
    (0, class_validator_1.IsString)({ message: 'First name must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50, { message: 'First name cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], User.prototype, "First_Name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Last name must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50, { message: 'Last name cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], User.prototype, "Last_Name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(Gender, { message: 'Gender must be "Female" or "Male".' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], User.prototype, "Gender", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Address must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100, { message: 'Address cannot exceed 100 characters.' }),
    __metadata("design:type", String)
], User.prototype, "Address", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required.' }),
    __metadata("design:type", String)
], User.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'PassWord cannot exceed 100 characters.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required.' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Confirm password does not match' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required.' }),
    __metadata("design:type", String)
], User.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'The role should be a string' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Phone must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], User.prototype, "Phone", void 0);
