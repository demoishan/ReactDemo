USE [LoginDB]
GO
/****** Object:  Table [dbo].[Post]    Script Date: 01-04-2021 23:15:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Post](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[caption] [varchar](50) NULL,
	[description] [varchar](50) NULL,
	[imageUrl] [varchar](500) NULL,
	[published] [bit] NULL,
	[createdBy] [varchar](50) NULL,
 CONSTRAINT [PK_Post] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 01-04-2021 23:15:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[username] [varchar](50) NULL,
	[passwordHash] [varchar](50) NULL,
	[active] [bit] NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Post] ON 
GO
INSERT [dbo].[Post] ([id], [caption], [description], [imageUrl], [published], [createdBy]) VALUES (1, N'Test 1', N'Description 1', N'http://wallpaperheart.com/wp-content/uploads/2018/07/wallpaper-hd-download-1.jpg', 1, N'abcd')
GO
INSERT [dbo].[Post] ([id], [caption], [description], [imageUrl], [published], [createdBy]) VALUES (2, N'Test 2', N'Description 2', N'http://wallpaperheart.com/wp-content/uploads/2018/07/wallpaper-hd-download-2.jpg', 1, N'abcd')
GO
INSERT [dbo].[Post] ([id], [caption], [description], [imageUrl], [published], [createdBy]) VALUES (3, N'Test 3', N'Description 3', N'http://wallpaperheart.com/wp-content/uploads/2018/07/wallpaper-hd-download-14.jpg', 1, N'abcd')
GO
INSERT [dbo].[Post] ([id], [caption], [description], [imageUrl], [published], [createdBy]) VALUES (4, N'Test 4', N'Description 4', N'http://wallpaperheart.com/wp-content/uploads/2018/07/wallpaper-hd-download-4.jpg', 1, N'abcd')
GO
INSERT [dbo].[Post] ([id], [caption], [description], [imageUrl], [published], [createdBy]) VALUES (5, N'Test 5', N'Description 5', N'http://wallpaperheart.com/wp-content/uploads/2018/07/wallpaper-hd-download-5.jpg', 1, N'abcd')
GO
INSERT [dbo].[Post] ([id], [caption], [description], [imageUrl], [published], [createdBy]) VALUES (6, N'Test 6', N'Description 6', N'http://wallpaperheart.com/wp-content/uploads/2018/07/wallpaper-hd-download-11.jpg', 1, N'abcd')
GO
INSERT [dbo].[Post] ([id], [caption], [description], [imageUrl], [published], [createdBy]) VALUES (7, N'Test 7', N'Description 7', N'http://wallpaperheart.com/wp-content/uploads/2018/07/wallpaper-hd-download-10.jpg', 1, N'abcd')
GO
SET IDENTITY_INSERT [dbo].[Post] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 
GO
INSERT [dbo].[User] ([Id], [name], [email], [username], [passwordHash], [active]) VALUES (1, N'Ishan', N'Ishan', N'admin', N'123', 1)
GO
SET IDENTITY_INSERT [dbo].[User] OFF
GO
/****** Object:  StoredProcedure [dbo].[Insert_User]    Script Date: 01-04-2021 23:15:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

--Insert_User 'Mudassar2', '12345', 'mudassar@aspsnippets.com'
CREATE PROCEDURE [dbo].[Insert_User]
	@Username NVARCHAR(20),
	@Password NVARCHAR(20),
	@Email NVARCHAR(30)
AS
BEGIN
	SET NOCOUNT ON;
	IF EXISTS(SELECT UserId FROM Users WHERE Username = @Username)
	BEGIN
		SELECT -1 AS UserId -- Username exists.
	END
	ELSE IF EXISTS(SELECT UserId FROM Users WHERE Email = @Email)
	BEGIN
		SELECT -2 AS UserId -- Email exists.
	END
	ELSE
	BEGIN
		INSERT INTO [Users]
			   ([Username]
			   ,[Password]
			   ,[Email]
			   ,[CreatedDate])
		VALUES
			   (@Username
			   ,@Password
			   ,@Email
			   ,GETDATE())
		
		SELECT SCOPE_IDENTITY() AS UserId -- UserId			   
     END
END

GO
/****** Object:  StoredProcedure [dbo].[Validate_User]    Script Date: 01-04-2021 23:15:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Validate_User]
      @Username NVARCHAR(20),
      @Password NVARCHAR(20)
AS
BEGIN
      SET NOCOUNT ON;
      DECLARE @UserId INT, @LastLoginDate DATETIME
     
      SELECT @UserId = UserId, @LastLoginDate = LastLoginDate
      FROM Users WHERE Username = @Username AND [Password] = @Password
     
      IF @UserId IS NOT NULL
      BEGIN
            IF NOT EXISTS(SELECT UserId FROM UserActivation WHERE UserId = @UserId)
            BEGIN
                  UPDATE Users
                  SET LastLoginDate = GETDATE()
                  WHERE UserId = @UserId
                  SELECT @UserId [UserId] -- User Valid
            END
            ELSE
            BEGIN
                  SELECT -2 -- User not activated.
            END
      END
      ELSE
      BEGIN
            SELECT -1 -- User invalid.
      END
END

GO
