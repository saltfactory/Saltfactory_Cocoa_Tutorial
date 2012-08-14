//
//  SFAppDelegate.h
//  SaltfactoryCocoaTutorial
//
//  Created by SungKwang Song on 8/14/12.
//  Copyright (c) 2012 saltfactory.net. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@interface SFAppDelegate : NSObject <NSApplicationDelegate>

@property (assign) IBOutlet NSWindow *window;

@property (readonly, strong, nonatomic) NSPersistentStoreCoordinator *persistentStoreCoordinator;
@property (readonly, strong, nonatomic) NSManagedObjectModel *managedObjectModel;
@property (readonly, strong, nonatomic) NSManagedObjectContext *managedObjectContext;

- (IBAction)saveAction:(id)sender;

@end
