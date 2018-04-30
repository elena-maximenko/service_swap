INSERT INTO `category` (`Name`)
VALUES
  ('IT'),
  ('Poetry');

INSERT INTO `service` (`Name`, `category_id`)
VALUES
  ('MVC sites', 1),
  ('Love lyrics', 2),
  ('Database design', 1);

INSERT INTO `user` (`login`, `first_name`, `last_name`, `role`, `password`)
VALUES
  ('amely.honey@gmail.com', 'Olena', 'Maximenko', 'Admin', 'Q@123456'),
  ('dima.levak96@gmail.com', 'Dmitry', 'Kozinets', 'Client', 'D@123456');

INSERT INTO `user_service` (`user_id`, `service_id`)
VALUES
  (1,1),
  (1,2),
  (1, 3),
  (2, 1),
  (2, 3);